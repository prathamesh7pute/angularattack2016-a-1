import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-header',
    templateUrl: 'header.component.html',
})
export class HeaderComponent {
    constructor() { }

    @Input() authenticated: boolean;
    @Output() logout: EventEmitter<any> = new EventEmitter(false);
}