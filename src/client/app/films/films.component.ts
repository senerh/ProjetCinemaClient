import {Component, OnInit} from '@angular/core';
import {Film} from "./film";
import {FilmsService} from "./films.service";
import {Personnage} from "../personnages/personnage";

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

    constructor(private filmsService: FilmsService) { }

    ngOnInit() {
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

    private getAllFilms(): void {
        this.filmsService
            .GetAll()
            .subscribe((data:Film[]) => this.films = data,
                error => console.log(error),
                () => console.log(this.films));
    }
}