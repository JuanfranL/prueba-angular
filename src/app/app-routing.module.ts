import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'movies', loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule) }, 
  { path: 'actors', loadChildren: () => import('./pages/actors/actors.module').then(m => m.ActorsModule) }, 
  { path: 'companies', loadChildren: () => import('./pages/companies/companies.module').then(m => m.CompaniesModule) },
  { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
