import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MoviesListComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class MoviesModule { }
