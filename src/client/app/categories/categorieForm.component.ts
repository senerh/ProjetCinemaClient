import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {CategoriesService} from "./categories.service";
import {Categorie} from "./categorie";
import {Router} from "@angular/router";


@Component({
    moduleId: module.id,
    selector: 'categorie-form',
    templateUrl: 'categorieForm.component.html',
    styleUrls: ['../../css/form.css'],
    providers: [CategoriesService],

})

export class CategorieFormComponent implements OnInit{

    formGroupCategorie : FormGroup;
    categorie: Categorie;

    constructor(public formBuilderCategorie: FormBuilder,
                private categoriesService: CategoriesService,
                private router : Router){
    }

    ngOnInit(): void {

        this.formGroupCategorie = this.formBuilderCategorie.group({
            codeCat: ['', Validators.required],
            libelleCat: ['', Validators.required],
        })
    }

    onCategorieSubmit(valid : boolean): void {

        if(valid == true){
            this.addCategorie();
            this.router.navigateByUrl('/categories');
        }
    }

    private addCategorie(): void {

        this.categoriesService
            .Add(this.formGroupCategorie.value)
            .subscribe(
                error => console.log(error),
                () => console.log(this.categorie)
            );
    }

}