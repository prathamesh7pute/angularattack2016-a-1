import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'expense-break',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  items: FirebaseListObservable<any[]>;
  
  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
  }

}
