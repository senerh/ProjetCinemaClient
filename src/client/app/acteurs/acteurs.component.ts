import {Component, OnInit} from "@angular/core";
import {ActeursService} from "./acteurs.service";
import {Acteur} from "./acteur";
import {Router} from "@angular/router";
import {Personnage} from "../personnages/personnage";

@Component({
    moduleId: module.id,
    selector: 'acteurs',
    providers: [ActeursService],
    templateUrl: 'acteurs.component.html',
    styleUrls: ['acteurs.component.css']
})


export class ActeursComponent implements OnInit{

    acteurs: Acteur[];
    personnages: Personnage[];

    constructor(private acteursService: ActeursService, private router: Router) { }

    ngOnInit() {
        this.getAllActeurs();
    }

    private getAllActeurs(): void {
        this.acteursService
            .GetAll()
            .subscribe((data:Acteur[]) => this.acteurs = data,
                error => console.log(error),
                () => console.log(this.acteurs));
    }

    public deleteActeur(noAct: number): void {
        this.acteursService
            .Delete(noAct)
            .subscribe(
                error => console.log(error),
                () => {
                    this.getAllActeurs();
                    this.router.navigateByUrl('/acteurs');
                }
            );
    }

    public getPersonnageByNoActeur(noActeur: number): void {

        this.personnages = [];
        this.acteursService
            .GetPersonnagesOfActeurs(noActeur)
            .subscribe((data:Personnage[]) => this.personnages = data,
                error => console.log(error),
                () => console.log(this.personnages));
    }
}