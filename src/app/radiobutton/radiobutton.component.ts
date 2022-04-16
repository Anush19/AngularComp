import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-radiobutton',
    templateUrl: './radiobutton.component.html',
    styleUrls: ['./radiobutton.component.scss'],
})
export class RadiobuttonComponent {
    @Input() public textStyle: { [key: string]: string } = {};
    @Input() public radioClass: string = '';
    @Input() radioLabel: string = '';
    @Input() radioButtonGroupName: string = '';
    @Input() disabled: boolean = false;
    @Input() public labelClass: string = '';
    @Input() public hintClass: string = '';
    @Input() required: boolean = false;
    @Input() public helpText: string = '';
    @Input() showFieldHelpText: boolean = true;
    @Input() public requiredText: string = '';
    @Input() isChecked: boolean = false;

    @Output() inputModelChange = new EventEmitter<{}>();


    textChange(changedEvent: any) {
        if (changedEvent.value) {
            console.log(changedEvent.value);
            const data = {name: changedEvent.name, value: changedEvent.value};
            console.log(data);
            this.inputModelChange.emit(data);
        }
    }
}
