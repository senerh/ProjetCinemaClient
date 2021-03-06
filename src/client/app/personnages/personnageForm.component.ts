import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {PersonnagesService} from "./personnages.service";
import {Personnage} from "./personnage";
import {Router} from "@angular/router";
import {Film} from "../films/film";
import {Acteur} from "../acteurs/acteur";
import {FilmsService} from "../films/films.service";
import {ActeursService} from "../acteurs/acteurs.service";


@Component({
    moduleId: module.id,
    selector: 'personnage-form',
    templateUrl: 'personnageForm.component.html',
    styleUrls: ['../../css/form.css'],
    providers: [PersonnagesService, FilmsService, ActeursService],

})

export class PersonnageFormComponent implements OnInit{

    formGroupPersonnage : FormGroup;
    personnage: Personnage;
    films: Film[];
    acteurs: Acteur[];


    constructor(public formBuilderPersonnage: FormBuilder,
                private personnagesService: PersonnagesService,
                private filmsService: FilmsService,
                private acteursService: ActeursService,
                private router : Router){
    }

    ngOnInit(): void {

        this.filmsService
            .GetAll()
            .subscribe((data:Film[]) => this.films = data,
                error => console.log(error),
                () => console.log(this.films));

        this.acteursService
            .GetAll()
            .subscribe((data:Acteur[]) => this.acteurs = data,
                error => console.log(error),
                () => console.log(this.acteurs));

        this.formGroupPersonnage = this.formBuilderPersonnage.group({
            nomPers: ['', Validators.required],
            noAct: ['', Validators.required],
            noFilm: ['', Validators.required]
        })
    }

    public onPersonnageSubmit(valid : boolean): void {
        if(valid == true){
            this.getPersonnage(this.formGroupPersonnage.value.noFilm, this.formGroupPersonnage.value.noAct);
        }
    }

    private addPersonnage(): void {
        this.personnagesService
            .Add(this.formGroupPersonnage.value)
            .subscribe(
                error => console.log(error),
                () => {
                    console.log(this.personnage);
                    this.router.navigate(['/personnages/', {resultat: "true"}]);
                }
            );
    }

    private getPersonnage(noFilm: number, noActeur: number): void {
        this.personnagesService
            .GetSingle(noFilm, noActeur)
            .subscribe((data:Personnage) => this.personnage = data,
                error => {
                    this.addPersonnage();
                },
                () => {
                    console.log(this.personnage);
                    this.router.navigate(['/personnages/', {resultat: "false"}]);
                }
            );
    }

}