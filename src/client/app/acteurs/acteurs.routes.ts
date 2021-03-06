import { Route } from '@angular/router';
import { ActeurFormComponent, ActeursComponent } from './index';


export const ActeursRoutes: Route[] = [
    {
        path: 'acteurs',
        component: ActeursComponent
    },
    {
        path: 'acteurs/add',
        component: ActeurFormComponent
    },
    {
        path: 'acteurs/edit/:id',
        component: ActeurFormComponent
    },
    {
        path: 'acteurs/:resultat',
        component: ActeursComponent
    }
];
