import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

export const toastState = {
  success: 'success',
  danger: 'danger',
};

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private snackBar: MatSnackBar) {}
  public showToast(message: string, toastState: string): void {
    const config: MatSnackBarConfig<any> = {
      duration: 60000,
      panelClass: [toastState],
      horizontalPosition: 'center',
      verticalPosition: 'top',
      data: [message],
    };

    this.snackBar.open(message, undefined, config);
  }
}
