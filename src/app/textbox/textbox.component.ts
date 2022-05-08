import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, Self, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ControlValueAccessor } from '../interface/customInterface';
import { Validator } from '../interface/validators';

@Component({
    selector: 'app-textbox',
    templateUrl: './textbox.component.html',
    styleUrls: ['./textbox.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: TextboxComponent
    }, {
        provide: NG_VALIDATORS,
        useExisting: TextboxComponent,
        multi: true
    }],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextboxComponent implements OnInit, ControlValueAccessor, Validator {
    @Input() textBoxForm: any = '';
    @Input() textClass: string = '';
    @Input() textBoxClass: string = '';
    @Input() requiredText: string = '';
    @Input() requiredTextClass: string = '';
    @Input() formCtrlName: string = '';
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
    @ViewChild('input') input: ElementRef;
    @Output() inputModelChange = new EventEmitter<string>();
    restrictInputLength: string = '';
    minInputLength: string = '';
    form: FormGroup;
    subscriptions: Subscription[] = [];

    constructor(private formBuilder: FormBuilder) {

    }


    ngOnInit() {

        this.form = this.formBuilder.group({
        });
        this.form.addControl(this.formCtrlName, new FormControl('', Validators.required))

        this.subscriptions.push(
            this.form.valueChanges.subscribe(value => {
                this.onChange(value);
                this.onTouched();
            })
        );
        this.restrictInputLength = this.maxLength.toString();
        this.minInputLength = this.minLength.toString();
    }

    textChange(changedEvent: any) {
        if (changedEvent.value) {
            this.inputModelChange.emit(changedEvent.value);
        }
    }

    onChange: any = () => { };
    onTouched: any = () => { };

    registerOnChange(fn) {
        this.onChange = fn;
    }
    get value(): TextboxComponent {
        return this.form.value;
    }

    set value(value: TextboxComponent) {
        this.form.setValue(value);
        this.onChange(value);
        this.onTouched();
    }


    writeValue(value) {
        if (value) {
            this.value = value;
        }

        if (value === null) {
            this.form.reset();
        }
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }

    validate(_: FormControl) {
        return this.form.valid ? null : { profile: { valid: false, }, };
    }
}
