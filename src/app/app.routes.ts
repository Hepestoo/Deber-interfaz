import { Routes } from '@angular/router';
import { Entregable1Component } from './entregables/entregable1/entregable1.component';
import { Entregable3Component } from './entregables/entregable3/entregable3.component';
import { Entregable2Component } from './entregables/entregable2/entregable2.component';

export const routes: Routes = [
    {path: 'entregable1', component:Entregable1Component},
    {path: 'entregable2', component:Entregable2Component},
    {path: 'entregable3', component:Entregable3Component},
    // {path: '', redirectTo: '/entregable1', pathMatch: 'full'}
];
