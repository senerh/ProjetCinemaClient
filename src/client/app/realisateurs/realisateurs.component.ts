import {Component, OnInit} from "@angular/core";
import {RealisateursService} from "./realisateurs.service";
import {Realisateur} from "./realisateurs";

@Component({
    moduleId: module.id,
    selector: 'realisateurs',
    providers: [RealisateursService],
    templateUrl: 'realisateurs.component.html',
    styleUrls: ['realisateurs.component.css']
})


export class RealisateursComponent implements OnInit{

    realisateurs: Realisateur[];

    constructor(private realisateursService: RealisateursService) { }

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
}