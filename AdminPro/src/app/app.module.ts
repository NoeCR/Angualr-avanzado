import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import { AppRoutingModule } from './app.routes';
// Modules
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPage } from './not-found/not-found.page';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPage,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
