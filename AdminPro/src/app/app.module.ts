import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
// Rutas
import { AppRoutingModule } from './app.routes';
// Modules
import { PagesModule } from './pages/pages.module';
// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Services
import { ServiceModule } from './services/service.module';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPage } from './not-found/not-found.page';
import { RegisterComponent } from './login/register.component';

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
    BrowserAnimationsModule,
    ServiceModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
