import { ChangeDetectionStrategy, Component, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
})
export class FooterComponent {
    constructor() { }

    //@Input() authenticated: boolean;
    //@Output() logout: EventEmitter<any> = new EventEmitter(false);
}