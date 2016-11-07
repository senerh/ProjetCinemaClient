import { Routes } from '@angular/router';

import {FilmsRoutes} from "./films/films.routes";
import {AccueilRoutes} from "./accueil/accueil.routes";

export const routes: Routes = [
    ...FilmsRoutes,
    ...AccueilRoutes
];
