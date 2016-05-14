import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-header',
    templateUrl: 'header.component.html',
})
export class HeaderComponent implements OnInit {
    constructor(private authService: AuthService) { }

    @Input() authenticated: boolean;
    @Output() logout: EventEmitter<any> = new EventEmitter(false);
    
    ngOnInit(){
    }
    
}