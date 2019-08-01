import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import { AppRoutingModule } from './app.routes';
// Modules
import { PagesModule } from './pages/pages.module';
// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPage } from './not-found/not-found.page';
import { RegisterComponent } from './login/register.component';
// import { DialogComponent } from './components/dialog/dialog.component';
// import { DishListComponent } from './components/dish-list/dish-list.component';
// import { DonaGraphComponent } from './components/dona-graph/dona-graph.component';
// import { IncrementComponent } from './components/increment/increment.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPage,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
