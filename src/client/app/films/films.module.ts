import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common"
import {FilmsComponent} from "./films.component";

@NgModule({
    imports: [CommonModule],
    declarations: [FilmsComponent],
    exports: [FilmsComponent]
})

export class FilmsModule { }