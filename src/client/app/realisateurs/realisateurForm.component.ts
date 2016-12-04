import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {RealisateursService} from "./realisateurs.service";
import {Realisateur} from "./realisateurs";
import {Router} from "@angular/router";


@Component({
    moduleId: module.id,
    selector: 'realisateur-form',
    templateUrl: 'realisateurForm.component.html',
    styleUrls: ['../../css/form.css'],
    providers: [RealisateursService],

})

export class RealisateurFormComponent implements OnInit{

    formGroupRealisateur : FormGroup;
    realisateur: Realisateur;

    constructor(public formBuilderRealisateur: FormBuilder,
                private realisateursService: RealisateursService,
                private router : Router){
    }

    ngOnInit(): void {

        this.formGroupRealisateur = this.formBuilderRealisateur.group({
            nomRea: ['', Validators.required],
            prenRea: ['', Validators.required]
        })
    }

    onRealisateurSubmit(valid : boolean): void {

        if(valid == true){
            this.addRealisateur();
            this.router.navigateByUrl('/realisateurs');
        }
    }


    private addRealisateur(): void {
        this.realisateursService
            .Add(this.formGroupRealisateur.value)
            .subscribe(
                error => console.log(error),
                () => console.log(this.realisateur)
            );
    }
}