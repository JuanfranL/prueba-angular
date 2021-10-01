import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListCardComponent } from './components/list-card/list-card.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    ListCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule
  ],
  exports: [
    HttpClientModule,
    ListCardComponent
  ]
})
export class SharedModule { }
