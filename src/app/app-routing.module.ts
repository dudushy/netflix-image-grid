import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  // { path: '', redirectTo: 'game', pathMatch: 'full' }, //? Redirect to Home
  // { path: 'home', component: HomeComponent }, //? Home
  { path: '', component: HomeComponent }, //? DEFAULT ROUTE
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
