import {Component, OnInit} from '@angular/core';
import {Film} from "./film";
import {FilmsService} from "./films.service";
import {Personnage} from "../personnages/personnage";
import indexOf = require("core-js/fn/array/index-of");
import {ActivatedRoute} from "@angular/router";

@Component({

    moduleId: module.id,
    selector: 'films',
    providers: [FilmsService],
    templateUrl: 'films.component.html',
    styleUrls: ['films.component.css']
})

export class FilmsComponent implements OnInit{

    films: Film[];
    personnages: Personnage[];
    codeCat: string;

    constructor(private filmsService: FilmsService,
                private routee: ActivatedRoute) {

    }

    ngOnInit() {


        this.routee.params.subscribe(params => {
            this.codeCat = params['codeCat'];
        });
        console.log(this.codeCat);

        this.getAllFilms();
    }

    public getPersonnageByNoFilm(noFilm: number): void {

        this.personnages = [];
        this.filmsService
            .GetPersonnagesOfFilm(noFilm)
            .subscribe((data:Personnage[]) => this.personnages = data,
                error => console.log(error),
                () => console.log(this.personnages));
    }

    /*private trierFilm(): void{
        var index = 0;
        for (let index =0; index < this.films.length; index++){
            if(this.codeCat && (this.films[index].categorieByCodeCat.codeCat == this.codeCat)){
                delete this.films[index];
            }
        }
    }*/

    private getAllFilms(): void {
        this.filmsService
            .GetAll()
            .subscribe((data:Film[]) => this.films = data,
                error => console.log(error),
                () => {console.log(this.films)});
    }
}