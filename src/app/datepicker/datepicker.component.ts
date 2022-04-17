import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent {


    @Input() public textStyle: string = '';
    @Input() public labelClass: string = '';
    @Input() public datepickerClass: string = '';
    @Input() public requiredText: string = '';
    @Input() public hintClass: string = '';
    @Input() label: string = '';
    @Input() disabled: boolean = false;
    @Input() showFieldHelpText: boolean = true;
    @Input() required: boolean = false;
    @Input() isHidden: boolean = false;
    @Input() public helpText: string = '';
    @Input() public datepickerFormat: string = '';
    @Input() placeholder: string = '';
    @Input() minRange: string = '';
    @Input() maxRange: string = '';
    @Input() showError = false;
    @Output() inputModelChange = new EventEmitter<string>();

    onSearchChange(changedEvent: any) {
        if (changedEvent.value) {
            console.log(changedEvent.value);
            this.inputModelChange.emit(changedEvent.value);
        }
    }
}
