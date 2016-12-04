import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common"
import {CategoriesComponent} from "./categories.component";
import {CategoriesService} from "./categories.service";
import {CategorieFormComponent} from "./categorieForm.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, SharedModule],
    declarations: [CategoriesComponent, CategorieFormComponent],
    exports: [CategoriesComponent, CategorieFormComponent],
    providers : [CategoriesService]
})

export class CategoriesModule {}