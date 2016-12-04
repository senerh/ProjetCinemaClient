import { Route } from '@angular/router';
import { FilmsComponent, FilmFormComponent } from './index';

export const FilmsRoutes: Route[] = [
    {
        path: 'films',
        component: FilmsComponent
    },
    {
        path: 'films/add',
        component: FilmFormComponent
    },
    {
        path: 'films/edit/:id',
        component: FilmFormComponent
    }
];
