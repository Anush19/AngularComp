import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {

    @Input() textStyle: string = '';
    @Input() labelClass: string = '';
    @Input() helpText: string = '';
    @Input() requiredText: string = '';
    @Input() checkboxClass: string = '';
    @Input() label: string = '';
    @Input() disabled: boolean = false;
    @Input() required: boolean = false;
    @Input() hintClass: string = '';
    @Input() value: string = '';
    @Input() showFieldHelpText: boolean = true;
    @Input() isChecked: boolean = false;
    @Input() isHidden: boolean = false;
    @Input() showError = false;
    @Output() inputModelChange = new EventEmitter<{}>();

    onEventChange(changedEvent: any) {
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
