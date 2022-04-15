import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-textbox',
    templateUrl: './textbox.component.html',
    styleUrls: ['./textbox.component.scss'],
})
export class TextboxComponent implements OnInit {
    @Input() textStyle: string = '';
    @Input() textBoxClass: string = '';
    @Input() requiredText: string = '';
    @Input() pattern: string = '';
    @Input() label: string = '';
    @Output() inputModelChange = new EventEmitter<string>();
    @Input() text: string = '';
    @Input() disabled: boolean = false;
    @Input() maxLength: number = 0;
    @Input() minLength: number = 0;
    @Input() labelClass: string = '';
    @Input() hintClass: string = '';
    @Input() required: boolean = false;
    @Input() helpText: string = '';
    @Input() formControlName: string = '';
    @Input() showFieldHelpText: boolean = true;
    restrictInputLength: string = '';
    minInputLength: string = '';

    ngOnInit() {
        this.restrictInputLength = this.maxLength.toString();
        this.minInputLength = this.minLength.toString();
    }

    textChange(changedEvent: any) {
        if (changedEvent.value) {
            console.log(changedEvent.value);
            this.inputModelChange.emit(changedEvent.value);
        }
    }
}
