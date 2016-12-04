import {Component, OnInit} from "@angular/core";
import {RealisateursService} from "./realisateurs.service";
import {Realisateur} from "./realisateurs";
import {Film} from "../films/film";
import {FilmsService} from "../films/films.service";

@Component({
    moduleId: module.id,
    selector: 'realisateurs',
    providers: [RealisateursService, FilmsService],
    templateUrl: 'realisateurs.component.html',
    styleUrls: ['realisateurs.component.css']
})


export class RealisateursComponent implements OnInit{

    realisateurs: Realisateur[];
    films: Film[];

    constructor(private realisateursService: RealisateursService,
                private filmsService: FilmsService) { }

    ngOnInit() {
        this.getAllRealisateurs();
    }

    private getAllRealisateurs(): void {
        this.realisateursService
            .GetAll()
            .subscribe((data:Realisateur[]) => this.realisateurs = data,
                error => console.log(error),
                () => console.log(this.realisateurs));
    }

    public getFilmByNoRealisateur(noRea: number): void {

        this.films = [];
        this.realisateursService
            .GetFilmsOfRealisateur(noRea)
            .subscribe((data:Film[]) => this.films = data,
                error => console.log(error),
                () => console.log(this.films));
    }
}