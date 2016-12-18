import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {PersonnagesService} from "./personnages.service";
import {Personnage} from "./personnage";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'personnages',
    providers: [PersonnagesService],
    templateUrl: 'personnages.component.html',
    styleUrls: ['personnages.component.css']
})

export class PersonnagesComponent implements OnInit{

    personnages: Personnage[];
    idFilm: number;
    idActeur: number;
    resultat: string;

    constructor(private personnagesService: PersonnagesService,
                private router: Router,
                private routee: ActivatedRoute) { }

    ngOnInit() {

        this.routee.params.subscribe(params => {
            this.resultat = params['resultat'];
        });

        this.getAllPersonnages();
    }

    private getAllPersonnages(): void {
        this.personnagesService
            .GetAll()
            .subscribe((data:Personnage[]) => this.personnages = data,
                error => console.log(error),
                () => console.log(this.personnages));
    }

    public deletePersonnage(noFilm: number, noActeur: number): void {
        this.personnagesService
            .Delete(noFilm, noActeur)
            .subscribe(
                error => console.log(error),
                () => {
                    this.getAllPersonnages();
                    this.router.navigateByUrl('/personnages');
                });
    }

    public trierPersonnageByFilm(idFilm: number): void {
        this.idActeur = null;
        this.idFilm = idFilm;
    }

    public trierPersonnageByActeur(idActeur: number): void {
        this.idFilm = null;
        this.idActeur = idActeur;
    }

    public resetTrier(): void {
        this.idActeur =  null;
        this.idFilm = null;
    }
}