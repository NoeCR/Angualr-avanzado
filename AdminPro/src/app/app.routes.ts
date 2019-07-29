import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Routing modules
import { PagesRoutingModule } from './pages/pages.routes';
// Components
import { LoginComponent } from './login/login.component';
import { NotFoundPage } from './not-found/not-found.page';
import { RegisterComponent } from './login/register.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    component: NotFoundPage
  }
];

@NgModule({
  imports: [
    PagesRoutingModule,
    RouterModule.forRoot(routes, { useHash: true } )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
