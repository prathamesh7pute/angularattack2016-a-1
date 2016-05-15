import {Component, OnInit} from '@angular/core';
import {MdCard} from '@angular2-material/card';

import {AuthService} from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [MdCard]
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
