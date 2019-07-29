import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';


const pagesRoutes: Routes = [
     {
        path: '',
        component: PagesComponent,
        children: [
        {
            path: 'dashboard',
            component: DashboardComponent
        },
        {
            path: 'progress',
            component: ProgressComponent
        },
        {
            path: 'grafica',
            component: Graphics1Component
        },
        {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
        },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot( pagesRoutes )],
    exports: [RouterModule]
  })

export class PagesRoutingModule {}
