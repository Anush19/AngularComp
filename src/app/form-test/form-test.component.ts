import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { ControlValueAccessor } from '../interface/customInterface';
import { TextboxComponent } from '../textbox/textbox.component';

@Component({
    selector: 'app-tooltip',
    templateUrl: './form-test.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: Tooltip,
            multi: true
        }
    ]
})
export class Tooltip implements OnInit, ControlValueAccessor {
    @ViewChild(TextboxComponent, { static: true }) public powersComponent: TextboxComponent;
    form: FormGroup;
    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: new FormControl('', Validators.required),
        });
    }
    callbackTextBox(event) {

    }
    resetForm() {
        this.form.reset();
    }

    onTouch() { }

    writeValue(obj: any): void {
        obj && this.form.setValue(obj, { emitEvent: false });
    }
    registerOnChange(fn: any): void {
        this.form.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        isDisabled ? this.form.disabled : this.form.enabled;
    }
    submit() {
        console.log(this.form.value);
    }

}
