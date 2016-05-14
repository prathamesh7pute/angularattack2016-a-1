import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from './auth.service';

@Component({
  moduleId: module.id,
  selector: 'expense-break',
  templateUrl: 'app.component.html',
  providers: [AuthService]
})
export class AppComponent {

  items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire, public authService: AuthService) {
    this.items = af.database.list('/items');
  }
  
  logOut() : void {
    this.authService.logOut();
    window.location.replace('/');
  }
  
}
