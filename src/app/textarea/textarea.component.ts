import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-textarea',
    templateUrl: './textarea.component.html',
    styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent implements OnInit {
    @Input() public textClass: string = '';
    @Input() public textareaClass: string = '';
    @Input() label: string = '';
    @Output() inputModelChange = new EventEmitter<string>();
    @Input() text: string = '';
    @Input() maxLength: number = 0;
    @Input() disabled: boolean = false;
    @Input() public requiredText: string = '';
    @Input() formControlName: string = '';

    @Input() public labelClass: string = '';
    @Input() public hintClass: string = '';
    @Input() required: boolean = false;
    @Input() public helpText: string = '';
    @Input() showFieldHelpText: boolean = true;

    restrictInputLength: string = '';

    ngOnInit() {
        this.restrictInputLength = this.maxLength.toString();
    }

    textChange(changedEvent: any) {
        if (changedEvent.value) {
            console.log(changedEvent.value);
            this.inputModelChange.emit(changedEvent.value);
        }
    }
}
