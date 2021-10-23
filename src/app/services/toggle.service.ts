import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Observable, of, Subject } from 'rxjs';
import { UnleashClient } from 'unleash-proxy-client';

export interface ToggleResponse {
  name : string,
  enabled : boolean
}

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  public _toggle : Subject<ToggleResponse[]> = new Subject<ToggleResponse[]>();
  public readonly toggle$ : Observable<ToggleResponse[]> = this._toggle.asObservable();

  unleash = new UnleashClient({
    url: 'http://20.72.158.233:3000/proxy',
    clientKey: 'some-secret',
    appName: 'my-webapp',
    refreshInterval: 5
});

  constructor() { 
    console.log("Initialise toggle service")
    this.unleash.start().then(() => {
      //this.toggle$ = of(this.unleash.getAllToggles());

      this._toggle.next(this.unleash.getAllToggles());
      console.log("registering update")
      this.unleash.on('update', () => {
        console.log("unleash update called")
        this._toggle.next(this.unleash.getAllToggles())
      });

    })

    
  }

  

  // getToggleObs() {
  //   this.toggle$ = of(this.unleash.getAllToggles())
  //   return this.toggle$;
  // }

  

  checkToggle(toggleName : string){
    console.log(this.unleash.getAllToggles())
     return this.unleash.isEnabled(toggleName)
     //let obs$ = this.unleash.isEnabled(toggleName);
  }
}
