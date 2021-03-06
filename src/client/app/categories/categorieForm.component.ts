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
    private categories: Categorie[];

    constructor(public formBuilderCategorie: FormBuilder,
                private categoriesService: CategoriesService,
                private router : Router){
    }

    ngOnInit(): void {

        this.formGroupCategorie = this.formBuilderCategorie.group({
            codeCat: ['', [Validators.required, Validators.maxLength(2), Validators.minLength(2)]],
            libelleCat: ['', Validators.required],
        })
    }

    onCategorieSubmit(valid : boolean): void {

        if(valid == true){
            this.getAllCategorie();
        }
    }

    private getAllCategorie(): void {
        this.categoriesService
            .GetAll()
            .subscribe((data:Categorie[]) => this.categories = data,
                error => console.log(error),
                () => {
                if(!this.categorieExist()) {
                    this.addCategorie();
                }
                else {
                    this.router.navigateByUrl('/categories/false');
                }
        });
    }

    private addCategorie(): void {
        this.categoriesService
            .Add(this.formGroupCategorie.value)
            .subscribe((ok) => console.log(ok),
                error => console.log(error),
                () => this.router.navigateByUrl('/categories/true'));
    }

    private categorieExist(): boolean{
        for (let categorie of this.categories){
            if(this.formGroupCategorie.value.codeCat == categorie.codeCat){
                return true;
            }
        }
        return false
    }
}