import {Component, OnInit} from "@angular/core";
import {ActeursService} from "./acteurs.service";
import {Acteur} from "./acteur";

@Component({
    moduleId: module.id,
    selector: 'acteurs',
    providers: [ActeursService],
    templateUrl: 'acteurs.component.html',
    styleUrls: ['acteurs.component.css']
})


export class ActeursComponent implements OnInit{

    acteurs: Acteur[];

    constructor(private acteursService: ActeursService) { }

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
}