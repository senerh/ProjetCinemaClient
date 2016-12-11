import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {RealisateursService} from "./realisateurs.service";
import {Realisateur} from "./realisateurs";
import {Router, ActivatedRoute} from "@angular/router";


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
    private idRealisateur: number;

    constructor(public formBuilderRealisateur: FormBuilder,
                private realisateursService: RealisateursService,
                private router : Router,
                private routee : ActivatedRoute){
    }

    ngOnInit(): void {

        this.routee.params.subscribe(params => {
            this.idRealisateur = + params['id'];
        });

        if(!isNaN(this.idRealisateur)){
            this.getRealisateur(this.idRealisateur);
        }
        
        this.formConstruct()
    }
    
    private formConstruct(): void{
        this.formGroupRealisateur = this.formBuilderRealisateur.group({
            nomRea: [!this.realisateur ? '' : this.realisateur.nomRea, Validators.required],
            prenRea: [!this.realisateur ? '' : this.realisateur.prenRea, Validators.required]
        })
    }

    onRealisateurSubmit(valid : boolean): void {

        if(valid == true && isNaN(this.idRealisateur)){
            this.addRealisateur();
        }
        else if (valid == true){
            this.editRealisateur();
        }
    }

    private editRealisateur(): void {
        let realisateurToAdd: Realisateur;
        realisateurToAdd = this.formGroupRealisateur.value;
        realisateurToAdd.noRea = this.idRealisateur;

        this.realisateursService
            .Update(realisateurToAdd)
            .subscribe(
                error => console.log(error),
                () => this.router.navigateByUrl('/realisateurs')
            );
    }


    private addRealisateur(): void {
        this.realisateursService
            .Add(this.formGroupRealisateur.value)
            .subscribe((data:Realisateur) => this.realisateur = data,
                error => console.log(error),
                () => {
                    console.log(this.realisateur);
                    this.router.navigateByUrl('/realisateurs');
                }
            );
    }

    private getRealisateur(idRealisateur : number): void {
        this.realisateursService
            .GetSingle(idRealisateur)
            .subscribe(
                (data:Realisateur) => this.realisateur = data,
                error => console.log(error),
                () => {
                    this.formConstruct();
                    console.log(this.realisateur)
                }
            );
    }
}