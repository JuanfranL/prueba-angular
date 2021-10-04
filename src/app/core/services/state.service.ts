import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
interface StateModel {
  key: String,
  value: BehaviorSubject<any>
}
@Injectable({
  providedIn: 'root'
})
/**
 * Tool to keep the app state
 * TODO: State keys must be in a constants file
 * TODO: implement delete
 */
export class StateService {
  private arrStates: Array<StateModel> = [];
  constructor() { }

  get(stateKey: String): Observable<any> {
    const state = this.findState(stateKey)[0];
    if (state) {
      return state.value;
    } else {
      const objState = { key: stateKey, value: new BehaviorSubject(null) };
      this.arrStates.push(objState);
      return objState.value;
    }
  }

  set(stateKey: String, stateValue: any) {
    let foundState = this.findState(stateKey);

    if (foundState.length === 0) {
      this.arrStates.push({key: stateKey, value: new BehaviorSubject(stateValue)});
    } else {
      foundState[0].value.next(stateValue);
    }
  }

  private findState(stateKey: String) {
    return this.arrStates.filter(
      (state) => state.key === stateKey
    );
  }
}
