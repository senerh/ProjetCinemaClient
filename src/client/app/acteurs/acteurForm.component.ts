import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ActeursService} from "./acteurs.service";
import {Acteur} from "./acteur";
import {Router, ActivatedRoute} from "@angular/router";
import {Film} from "../films/film";


@Component({
    moduleId: module.id,
    selector: 'acteur-form',
    templateUrl: 'acteurForm.component.html',
    styleUrls: ['../../css/form.css'],
    providers: [ActeursService],

})

export class ActeurFormComponent implements OnInit{

    formGroupActeur : FormGroup;
    acteur: Acteur;
    idActeur : number;

    constructor(public formBuilderActeur: FormBuilder,
                private acteursService: ActeursService,
                private router : Router,
                private routee: ActivatedRoute){
    }

    ngOnInit(): void {

        this.routee.params.subscribe(params => {
            this.idActeur = + params['id'];
        });

        if(!isNaN(this.idActeur)){
            this.getActeur(this.idActeur);
        }

        this.construireForm();
    }

    private construireForm(): void {
        this.formGroupActeur = this.formBuilderActeur.group({
            nomAct: [!this.acteur ? '' : this.acteur.nomAct, Validators.required],
            prenAct: [!this.acteur ? '' : this.acteur.prenAct, Validators.required],
            dateNaiss: [!this.acteur ? '' : this.acteur.dateNaiss, Validators.required],
            dateDeces: [!this.acteur ? '' : this.acteur.dateDeces],
        })
    }

    private addActeur(): void {
        this.acteursService
            .Add(this.formGroupActeur.value)
            .subscribe((data:Acteur) => this.acteur = data, error => console.log(error),
                () => console.log(this.acteur));
    }

    private editActeur(): void {
        let acteurToEdit: Acteur;
        acteurToEdit = this.formGroupActeur.value;
        acteurToEdit.noAct = this.idActeur;

        this.acteursService
            .Update(acteurToEdit)
            .subscribe((data:Acteur) => this.acteur = data,
                error => console.log(error),
                () => console.log(this.acteur));
    }

    public onActeurSubmit(valid : boolean): void {

        if(valid == true && isNaN(this.idActeur)){
            this.addActeur();
            this.router.navigate(['/acteurs']);
        }
        else if (valid == true){
            this.editActeur();
            this.router.navigate(['/acteurs']);
        }
    }

    private getActeur(idActeur : number): void {
        this.acteursService
            .GetSingle(idActeur)
            .subscribe((data:Acteur) => this.acteur = data,
                error => console.log(error),
                () => {this.construireForm(); console.log(this.acteur)});
    }
}