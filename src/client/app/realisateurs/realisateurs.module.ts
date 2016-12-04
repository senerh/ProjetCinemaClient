import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common"
import {RealisateursComponent} from "./realisateurs.component";
import {RealisateursService} from "./realisateurs.service";
import {RealisateurFormComponent} from "./realisateurForm.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, SharedModule],
    declarations: [RealisateursComponent, RealisateurFormComponent],
    exports: [RealisateursComponent, RealisateurFormComponent],
    providers : [RealisateursService]
})

export class RealisateursModule {}