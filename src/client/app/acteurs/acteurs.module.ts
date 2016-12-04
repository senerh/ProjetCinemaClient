import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common"
import {ActeursComponent} from "./acteurs.component";
import {ActeursService} from "./acteurs.service";
import {ActeurFormComponent} from "./acteurForm.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, SharedModule],
    declarations: [ActeursComponent, ActeurFormComponent],
    exports: [ActeursComponent, ActeurFormComponent],
    providers : [ActeursService]
})

export class ActeursModule {}