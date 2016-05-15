import { Component, OnInit } from '@angular/core';
import { MdCard } from '@angular2-material/card';
import { MdButton } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { AuthService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [MdCard, MdButton, MD_LIST_DIRECTIVES]
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() { }

}
