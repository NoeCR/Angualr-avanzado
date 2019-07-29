import { NgModule } from '@angular/core';
// Modules
import { UiModule } from '../layouts/ui.module';
import { PagesRoutingModule } from './pages.routes';
// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
    ],
    imports: [
        UiModule,
        PagesRoutingModule
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
    ]
})

export class PagesModule {}
