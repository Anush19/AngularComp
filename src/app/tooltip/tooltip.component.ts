import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-tooltip',
    templateUrl: './tooltip.component.html',
})
export class Tooltip implements OnInit {
    @Input() textClass: string = '';
    @Input() textBoxClass: string = '';
    @Input() requiredText: string = '';
    @Input() pattern: string = '';
    @Input() label: string = '';
    @Input() text: string = '';
    @Input() textValue: any = '';
    @Input() disabled: boolean = false;
    @Input() maxLength: number = 0;
    @Input() minLength: number = 0;
    @Input() labelClass: string = '';
    @Input() hintClass: string = '';
    @Input() required: boolean = false;
    @Input() readOnly: boolean = false;
    @Input() isHidden: boolean = false;
    @Input() helpText: string = '';
    @Input() placeholder: string = '';
    @Input() showFieldHelpText: boolean = true;
    @Input() showError = false;
    @Output() inputModelChange = new EventEmitter<string>();
    restrictInputLength: string = '';
    minInputLength: string = '';

    ngOnInit() {
        this.restrictInputLength = this.maxLength.toString();
        this.minInputLength = this.minLength.toString();
    }

    textChange(changedEvent: any) {
        if (changedEvent.value) {
            this.inputModelChange.emit(changedEvent.value);
        }
    }
}
