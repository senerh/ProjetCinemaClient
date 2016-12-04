import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common"
import {PersonnagesComponent} from "./personnages.component";
import {PersonnagesService} from "./personnages.service";
import {PersonnageFormComponent} from "./personnageForm.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, SharedModule],
    declarations: [PersonnagesComponent, PersonnageFormComponent],
    exports: [PersonnagesComponent, PersonnageFormComponent],
    providers : [PersonnagesService]
})

export class PersonnagesModule {}