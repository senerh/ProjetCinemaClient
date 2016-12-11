import {Component, OnInit} from "@angular/core";
import {RealisateursService} from "./realisateurs.service";
import {Realisateur} from "./realisateurs";
import {Film} from "../films/film";
import {FilmsService} from "../films/films.service";
import {Router} from "@angular/router";

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
                private filmsService: FilmsService,
                private router: Router) { }

    ngOnInit() {
        this.getAllRealisateurs();
    }

    private getAllRealisateurs(): void {
        this.realisateursService
            .GetAll()
            .subscribe((data:Realisateur[]) => this.realisateurs = data,
                error => console.log(error),
                () => {
                    for(let realisateur of this.realisateurs){
                        this.films = [];
                        this.realisateursService
                            .GetFilmsOfRealisateur(realisateur.noRea)
                            .subscribe((data:Film[]) => this.films = data,
                                error => console.log(error),
                                () => {
                                    realisateur.deletable = this.films.length <= 0;
                                }
                            )
                        ;
                    }
                }
            )
        ;
    }

    public deleteRealisateur(noRealisateur: number): void {
        this.realisateursService
            .Delete(noRealisateur)
            .subscribe(
                error => console.log(error),
                () => {
                    this.getAllRealisateurs();
                    this.router.navigateByUrl('/realisateurs');
                });
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