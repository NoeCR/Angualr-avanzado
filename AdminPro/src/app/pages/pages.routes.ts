import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const pagesRoutes: Routes = [
     {
        path: '',
        component: PagesComponent,
        children: [
        {
            path: 'dashboard',
            component: DashboardComponent,
            data: {
                title: 'Dashboard'
            }
        },
        {
            path: 'progress',
            component: ProgressComponent,
            data: {
                title: 'Progress'
            }
        },
        {
            path: 'grafica',
            component: Graphics1Component,
            data: {
                title: 'Graphics'
            }
        },
        {
            path: 'account-settings',
            component: AccountSettingsComponent,
            data: {
                title: 'Settings'
            }
        },
        {
            path: 'promises',
            component: PromisesComponent,
            data: {
                title: 'Promises'
            }
        },
        {
            path: 'rxjs',
            component: RxjsComponent,
            data: {
                title: 'RxJs'
            }
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
    imports: [RouterModule.forChild( pagesRoutes )],
    exports: [RouterModule]
  })

export class PagesRoutingModule {}
