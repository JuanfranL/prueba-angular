import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CoreModule } from 'src/app/core/core.module';
import { TranslocoModule} from '@ngneat/transloco'


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    TranslocoModule,
    MainRoutingModule
  ]
})
export class MainModule { }
