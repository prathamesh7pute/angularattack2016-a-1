import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuth, FirebaseAuthState, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'expense-break',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.items = af.database.list('/items');

    this.af.auth.subscribe(auth => console.log(auth));
    
  }

  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect,
    });
  }

  

}
