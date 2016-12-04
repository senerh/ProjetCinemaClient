import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ActeursService} from "./acteurs.service";
import {Acteur} from "./acteur";
import {Router} from "@angular/router";


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

    constructor(public formBuilderActeur: FormBuilder,
                private acteursService: ActeursService,
                private router : Router){
    }

    ngOnInit(): void {

        this.formGroupActeur = this.formBuilderActeur.group({
            nomAct: ['', Validators.required],
            prenAct: ['', Validators.required],
            dateNaiss: ['', Validators.required],
            dateDeces: '',
        })
    }

    private addActeur(): void {
        this.acteursService
            .Add(this.formGroupActeur.value)
            .subscribe((data:Acteur) => this.acteur = data, error => console.log(error),
                () => console.log(this.acteur));
    }

    onActeurSubmit(valid : boolean): void {

        if(valid == true){
            this.addActeur();
            this.router.navigateByUrl('/acteurs');
        }
    }

}