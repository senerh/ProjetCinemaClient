import {Component, OnInit} from "@angular/core";
import {CategoriesService} from "./categories.service";
import {Categorie} from "./categorie";

@Component({
    moduleId: module.id,
    selector: 'categories',
    providers: [CategoriesService],
    templateUrl: 'categories.component.html',
    styleUrls: ['categories.component.css']
})


export class CategoriesComponent implements OnInit{

    categories: Categorie[];

    constructor(private categoriesService: CategoriesService) { }

    ngOnInit() {
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