import { NgModule } from '@angular/core';
// Modules
import { UiModule } from '../layouts/ui.module';
import { PagesRoutingModule } from './pages.routes';
// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';
import { IncrementComponent } from '../components/increment/increment.component';
import { DialogComponent } from '../components/dialog/dialog.component';

// Graphics
import { ChartsModule } from 'ng2-charts';
import { DonaGraphComponent } from '../components/dona-graph/dona-graph.component';
// List Components
import { DishListComponent } from '../components/dish-list/dish-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        IncrementComponent,
        DonaGraphComponent,
        DishListComponent,
        DialogComponent,
        AccountSettingsComponent
    ],
    imports: [
        BrowserModule,
        UiModule,
        PagesRoutingModule,
        ChartsModule,
        MatDialogModule
    ],
    // providers: [ MatDialogModule ],
    entryComponents: [ DialogComponent ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        AccountSettingsComponent
    ]
})

export class PagesModule {}
