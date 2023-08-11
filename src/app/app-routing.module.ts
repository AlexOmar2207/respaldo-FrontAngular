import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routes';

export const routes: Routes = [
  // Rutas protegidas

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  // Rutas hijas
  { path: '**', component: NopagesfoundComponent },
 ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule,
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
