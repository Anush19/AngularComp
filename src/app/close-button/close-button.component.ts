import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-close-button',
    templateUrl: './close-button.component.html',
    styleUrls: ['./close-button.component.scss']
})
export class CloseButtonComponent {

    @Input() public disabled: boolean = false;
    @Output() onClick = new EventEmitter<string>();

    clicked() {
        this.onClick.emit('clicked');
    }

}
