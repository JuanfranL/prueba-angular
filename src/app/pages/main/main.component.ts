import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
    private stateService: StateService
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
  
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
