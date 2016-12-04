import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common"
import {FilmsComponent} from "./films.component";
import {FilmsService} from "./films.service";
import {FilmFormComponent} from "./filmForm.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, SharedModule],
    declarations: [FilmsComponent, FilmFormComponent],
    exports: [FilmsComponent, FilmFormComponent],
    providers : [FilmsService]
})

export class FilmsModule { }