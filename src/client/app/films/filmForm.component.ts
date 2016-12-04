import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder} from "@angular/forms";
import {FilmsService} from "./films.service";
import {Film} from "./film";
import {Router, ActivatedRoute} from "@angular/router";
import {Realisateur} from "../realisateurs/realisateurs";
import {RealisateursService} from "../realisateurs/realisateurs.service";
import {CategoriesService} from "../categories/categories.service";
import {Categorie} from "../categories/categorie";


@Component({
    moduleId: module.id,
    selector: 'film-form',
    templateUrl: 'filmForm.component.html',
    styleUrls: ['../../css/form.css'],
    providers: [FilmsService, RealisateursService, CategoriesService],

})

export class FilmFormComponent implements OnInit{

    formGroupFilm : FormGroup;
    film: Film;
    realisateurs: Realisateur[];
    categories: Categorie[];
    idFilm: number;

    constructor(public formBuilderFilm: FormBuilder,
                private filmsService: FilmsService,
                private realisateursService: RealisateursService,
                private categorieService: CategoriesService,
                private router : Router,
                private routee: ActivatedRoute){
    }

    ngOnInit(): void {

        this.routee.params.subscribe(params => {
            this.idFilm = + params['id'];
        });

        if(!isNaN(this.idFilm)){
            console.log(this.idFilm);
            this.getFilm(this.idFilm);
        }

        this.realisateursService
            .GetAll()
            .subscribe((data:Realisateur[]) => this.realisateurs = data,
                error => console.log(error),
                () => console.log(this.realisateurs));

        this.categorieService
            .GetAll()
            .subscribe((data:Categorie[]) => this.categories = data,
                error => console.log(error),
                () => console.log(this.categories));


        this.formGroupFilm = this.formBuilderFilm.group({
            titre: (typeof this.film == 'undefined') ? '' : this.film.titre,
            duree: (typeof this.film == 'undefined') ? '' : this.film.duree,
            dateSortie: (typeof this.film == 'undefined') ? '' : this.film.dateSortie,
            budget: (typeof this.film == 'undefined') ? '' : this.film.budget,
            montantRecette: (typeof this.film == 'undefined') ? '' : this.film.montantRecette,
            realisateurByNoRea: (typeof this.film == 'undefined') ? '' : this.film.realisateurByNoRea,
            categorieByCodeCat: (typeof this.film == 'undefined') ? '' : this.film.categorieByCodeCat,
        })
    }

    public onFilmSubmit(valid : boolean): void {

        for (let rea of this.realisateurs) {
            if(rea.noRea == this.formGroupFilm.value.realisateurByNoRea){
                this.formGroupFilm.value.realisateurByNoRea = rea;
            }
        }

        for (let cat of this.categories) {
            if(cat.codeCat == this.formGroupFilm.value.categorieByCodeCat){
                this.formGroupFilm.value.categorieByCodeCat = cat;
            }
        }

        if(valid == true && isNaN(this.idFilm)){
            this.addFilm();
            this.router.navigateByUrl('/films');
        }
        else if(valid == true){

            this.editFilm();
            this.router.navigateByUrl('/films');
        }
    }

    private addFilm(): void {
        this.filmsService
            .Add(this.formGroupFilm.value)
            .subscribe((data:Film) => this.film = data, error => console.log(error),
                () => console.log(this.film));
    }

    private editFilm(): void {
        this.filmsService
            .Update(this.formGroupFilm.value)
            .subscribe((data:Film) => this.film = data, error => console.log(error),
                () => console.log(this.film));
    }

    private getFilm(idFilm : number): void {
        this.filmsService
            .GetSingle(idFilm)
            .subscribe((data:Film) => this.film = data,
                error => console.log(error),
                () => console.log(this.film));
    }
}