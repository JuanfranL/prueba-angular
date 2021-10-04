import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public stateValue = 'default';
  constructor(
    private stateService: StateService,
    private spinnerService: SpinnerService
  ) { }
  
  ngOnInit(): void {
    this.subscriptions.push(this.stateService.get('stateMain').subscribe(
      (value) => {
        this.stateValue = value;
      }
    ));
  }
  
  setValue() {
    this.stateService.set('stateMain', 'adios');
  }

  setGlobalSpinner() {
    this.spinnerService.openGlobalSpinner();
    setTimeout(() => {this.spinnerService.closeGlobalSpinner()}, 2000);
  }
  
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
