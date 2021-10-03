import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
/**
 * This service shows a spinner that blocks 
 */
export class SpinnerService {
  // private overlayRef: OverlayRef = null;

  constructor(
    private overlay: Overlay
  ) { }

  public show () {
    // if (this.overlayRef) {
    //   this.overlayRef = this.overlay.create();
    // }
  }

}
