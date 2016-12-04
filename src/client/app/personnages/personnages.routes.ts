import { Route } from '@angular/router';
import { PersonnageFormComponent, PersonnagesComponent } from './index';


export const PersonnagesRoutes: Route[] = [
    {
        path: 'personnages',
        component: PersonnagesComponent
    },
    {
        path: 'personnages/add',
        component: PersonnageFormComponent
    }
];
