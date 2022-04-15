import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {

    @Input() public textStyle: string = '';
    @Input() public labelClass: string = '';
    @Input() public helpText: string = '';
    @Input() public requiredText: string = '';
    @Input() public checkboxClass: string = '';
    @Input() label: string = '';
    @Input() disabled: boolean = false;
    @Input() required: boolean = false;
    @Input() public hintClass: string = '';
    @Input() showFieldHelpText: boolean = true;
    @Input() formControlName: string = '';

    @Output() inputModelChange = new EventEmitter<{}>();

    textChange(changedEvent: any) {
        if (changedEvent.value) {
            const data = {
                name: changedEvent.name,
                checked: changedEvent.checked,
            };
            console.log(data);
            this.inputModelChange.emit(data);
        }
    }
}
