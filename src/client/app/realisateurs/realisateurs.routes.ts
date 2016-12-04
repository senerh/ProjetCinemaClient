import { Route } from '@angular/router';
import { RealisateurFormComponent, RealisateursComponent } from './index';


export const RealisateursRoutes: Route[] = [
    {
        path: 'realisateurs',
        component: RealisateursComponent
    },
    {
        path: 'realisateurs/add',
        component: RealisateurFormComponent
    },
    {
        path: 'realisateurs/edit/:id',
        component: RealisateurFormComponent
    }
];
