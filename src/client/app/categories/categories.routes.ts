import { Route } from '@angular/router';
import { CategorieFormComponent, CategoriesComponent } from './index';


export const CategoriesRoutes: Route[] = [
    {
        path: 'categories',
        component: CategoriesComponent
    },
    {
        path: 'categories/add',
        component: CategorieFormComponent
    }
];
