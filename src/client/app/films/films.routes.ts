import { Route } from '@angular/router';
import { FilmsComponent, FilmFormComponent } from './index';

export const FilmsRoutes: Route[] = [
    {
        path: 'films',
        component: FilmsComponent,
        pathMatch: 'full'

    },
    {
        path: 'films/add',
        component: FilmFormComponent,
        pathMatch: 'full'
    },
    {
        path: 'films/edit/:id',
        component: FilmFormComponent,
        pathMatch: 'full'
    },
    {
        path: 'films/categorie/:codeCat',
        component: FilmsComponent,
        pathMatch: 'full'
    }
];
