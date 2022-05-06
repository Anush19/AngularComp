import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-textarea',
    templateUrl: './textarea.component.html',
    styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent implements OnInit {
    @Input() textClass: string = '';
    @Input() textareaClass: string = '';
    @Input() label: string = '';
    @Input() rows: string = '';
    @Input() text: string = '';
    @Input() maxLength: number = 0;
    @Input() disabled: boolean = false;
    @Input() requiredText: string = '';
    @Input() placeholder: string = '';
    @Input() labelClass: string = '';
    @Input() hintClass: string = '';
    @Input() required: boolean = false;
    @Input() helpText: string = '';
    @Input() showFieldHelpText: boolean = true;
    @Input() showError = false;
    @Input() formCtrlName: string = '';
    @Output() inputModelChange = new EventEmitter<string>();

    restrictInputLength: string = '';

    ngOnInit() {
        this.restrictInputLength = this.maxLength.toString();
    }

    textChange(changedEvent: any) {
        if (changedEvent.value) {
            this.inputModelChange.emit(changedEvent.value);
        }
    }
}
