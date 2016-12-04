import {Component, OnInit} from "@angular/core";
import {PersonnagesService} from "./personnages.service";
import {Personnage} from "./personnage";

@Component({
    moduleId: module.id,
    selector: 'personnages',
    providers: [PersonnagesService],
    templateUrl: 'personnages.component.html',
    styleUrls: ['personnages.component.css']
})

export class PersonnagesComponent implements OnInit{

    personnages: Personnage[];

    constructor(private personnagesService: PersonnagesService) { }

    ngOnInit() {
        this.getAllPersonnages();
    }

    private getAllPersonnages(): void {
        this.personnagesService
            .GetAll()
            .subscribe((data:Personnage[]) => this.personnages = data,
                error => console.log(error),
                () => console.log(this.personnages));

    }

    public removePersonnage(noFilm: number, noActeur: number): void {
        this.personnagesService
            .Delete(noFilm, noActeur)
            .subscribe((ok)=>{console.log(ok)});
    }
}