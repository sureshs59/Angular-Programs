import { Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { MasterComponent } from './components/master/master.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo : 'master',
        pathMatch : 'full'
    },
    {
        path: 'master',
        component : MasterComponent
    },
    // Eager loading — loads immediately on app start
    {
        path: 'employee',
        component: EmployeeComponent
    },
     // Lazy loading — downloads bundle only when user visits the route
    {
        path: 'client',
        loadComponent: () => import('./components/client/client.component')
        .then(c => c.ClientComponent)

    },

    {
        path:'department',
        loadComponent: () => import('./components/department/department.component')
        .then(d => d.DepartmentComponent)
    },
    {
        path:'**', component : NotFoundComponent   // catch-all 404
    }
];
