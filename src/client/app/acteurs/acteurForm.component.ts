import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ActeursService} from "./acteurs.service";
import {Acteur} from "./acteur";
import {Router, ActivatedRoute} from "@angular/router";


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
            dateNaiss: [!this.acteur ? '' : this.acteur.dateNaiss, [Validators.required,
                Validators.pattern("[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])")]],
            dateDeces: [!this.acteur ? '' : this.acteur.dateDeces, [
                Validators.pattern("[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])")]]
        })
    }

    public onActeurSubmit(valid : boolean): void {

        if(valid == true && isNaN(this.idActeur)){
            this.addActeur();
        }
        else if (valid == true){
            this.editActeur();
        }
    }

    private getActeur(idActeur : number): void {
        this.acteursService
            .GetSingle(idActeur)
            .subscribe((data:Acteur) => this.acteur = data,
                error => console.log(error),
                () => {this.construireForm(); console.log(this.acteur)});
    }

    private addActeur(): void {

        this.acteursService
            .Add(this.formGroupActeur.value)
            .subscribe((data:Acteur) => this.acteur = data,
                error => console.log(error),
                () => {
                    console.log(this.acteur);
                    this.router.navigate(['/acteurs']);
                }
            );
    }


    private editActeur(): void {
        let acteurToEdit: Acteur;
        acteurToEdit = this.formGroupActeur.value;
        acteurToEdit.noAct = this.idActeur;

        this.acteursService
            .Update(acteurToEdit)
            .subscribe(
                error => console.log(error),
                () => {
                    console.log(this.acteur);
                    this.router.navigate(['/acteurs']);
                }
            );
    }
}