import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { SharedModule } from './shared/shared.module';
import {FilmsModule} from "./films/films.module";
import {AccueilModule} from "./accueil/accueil.module";
import {ActeursModule} from "./acteurs/acteurs.module";
import {RealisateursModule} from "./realisateurs/realisateurs.module";
import {CategoriesModule} from "./categories/categories.module";
import {PersonnagesModule} from "./personnages/personnages.module";


@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes),
    AccueilModule, FilmsModule, ActeursModule,
    RealisateursModule, CategoriesModule, PersonnagesModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>',
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
