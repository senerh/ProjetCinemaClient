import {Component, OnInit} from "@angular/core";
import {CategoriesService} from "./categories.service";
import {Categorie} from "./categorie";
import {ActivatedRoute} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'categories',
    providers: [CategoriesService],
    templateUrl: 'categories.component.html',
    styleUrls: ['categories.component.css']
})


export class CategoriesComponent implements OnInit{

    categories: Categorie[];
    resultat: string;

    constructor(private categoriesService: CategoriesService, private routee: ActivatedRoute) { }

    ngOnInit() {

        this.routee.params.subscribe(params => {
            this.resultat = params['resultat'];
        });

        console.log(this.resultat);

        this.getAllCategories();
    }

    private getAllCategories(): void {
        this.categoriesService
            .GetAll()
            .subscribe((data:Categorie[]) => this.categories = data,
                error => console.log(error),
                () => console.log(this.categories));
    }
}