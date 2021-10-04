import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { TranslocoService} from '@ngneat/transloco'

@Injectable({
  providedIn: 'root'
})
/**
 * this component may be rewrited with custom template or custom component, even with no snackbar from material. 
 * This is done to make every error on the app with the same design
 */
export class ErrorDialogService {
  private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private matSnackBar: MatSnackBar,
    private translocoService: TranslocoService
  ) { }

  showError(message: any) {
    this.matSnackBar.open(message, this.translocoService.translate('common.error-confirmation'), {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  
}
