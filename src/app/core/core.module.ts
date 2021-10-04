import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslocoModule} from '@ngneat/transloco'



@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  exports: [
    SpinnerComponent
  ]
})
export class CoreModule { }
