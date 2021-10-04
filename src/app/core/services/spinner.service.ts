import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
/**
 * This service shows a spinner that blocks 
 */
export class SpinnerService {

  constructor(
    private stateService: StateService
  ) { }

  public openGlobalSpinner () {
    this.stateService.set('GlobalSpinner', true);
  }

  public closeGlobalSpinner () {
    this.stateService.set('GlobalSpinner', false);
  }

}
