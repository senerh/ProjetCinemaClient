import {Component, OnInit} from '@angular/core';
import {Film} from "./film";
import {FilmsService} from "./films.service";
import {Personnage} from "../personnages/personnage";
import {ActivatedRoute, Router} from "@angular/router";
import {Categorie} from "../categories/categorie";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {CategoriesService} from "../categories/categories.service";

@Component({

    moduleId: module.id,
    selector: 'films',
    providers: [FilmsService, CategoriesService],
    templateUrl: 'films.component.html',
    styleUrls: ['films.component.css']
})

export class FilmsComponent implements OnInit{

    films: Film[];
    personnages: Personnage[];
    codeCat: string;
    noRea: number;
    formGroupCategorie : FormGroup;
    categories : Categorie[];

    constructor(private filmsService: FilmsService,
                private categoriesService: CategoriesService,
                private routee: ActivatedRoute,
                private router : Router,
                public formBuilderCategorie: FormBuilder) {

    }

    ngOnInit() {

        this.routee.params.subscribe(params => {
            this.codeCat = params['codeCat'];
        });

        this.getAllCategorie();

        this.getAllFilms();

        this.construireForm();
    }

    private construireForm(): void{

        this.formGroupCategorie = this.formBuilderCategorie.group({
            categorie: '',
        });
    }

    public getPersonnageByNoFilm(noFilm: number): void {

        this.personnages = [];
        this.filmsService
            .GetPersonnagesOfFilm(noFilm)
            .subscribe((data:Personnage[]) => this.personnages = data,
                error => console.log(error),
                () => console.log(this.personnages));
    }

    private getAllFilms(): void {
        this.filmsService
            .GetAll()
            .subscribe((data:Film[]) => this.films = data,
                error => console.log(error),
                () => {
                    console.log(this.films);
                }
            );
    }

    private getAllCategorie(): void {
        this.categoriesService
            .GetAll()
            .subscribe((data:Categorie[]) => this.categories = data,
                error => console.log(error),
                () => {
                    console.log(this.categories);
                }
            );
    }

    public deleteFilm(noFilm: number): void {
        this.filmsService
            .Delete(noFilm)
            .subscribe(
                error => console.log(error),
                () => {
                    this.getAllFilms();
                    this.router.navigateByUrl('/films');
                }
            );
    }

    public trierFilmByCat(event:any): void {
        this.codeCat = event;
    }

    public trierFilmByRea(noRea: number): void {
        this.noRea = noRea;
    }

    public resetTrier(): void {
        this.codeCat = null;
        this.noRea = null;
    }
}