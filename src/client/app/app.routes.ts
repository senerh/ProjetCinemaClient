import { Routes } from '@angular/router';

import {FilmsRoutes} from "./films/films.routes";
import {AccueilRoutes} from "./accueil/accueil.routes";
import {ActeursRoutes} from "./acteurs/acteurs.routes";
import {RealisateursRoutes} from "./realisateurs/realisateurs.routes";
import {CategoriesRoutes} from "./categories/categories.routes";
import {PersonnagesRoutes} from "./personnages/personnages.routes";

export const routes: Routes = [
    ...FilmsRoutes,
    ...AccueilRoutes,
    ...ActeursRoutes,
    ...RealisateursRoutes,
    ...CategoriesRoutes,
    ...PersonnagesRoutes
];
