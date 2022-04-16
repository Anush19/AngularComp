import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {EmailValidatorDirective} from './email-validator.directive';
import {ButtonsComponent} from './buttons/buttons.component';
import {TextboxComponent} from './textbox/textbox.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {RadiobuttonComponent} from './radiobutton/radiobutton.component';
import {TextareaComponent} from './textarea/textarea.component';
import {DatepickerComponent} from './datepicker/datepicker.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {NgSelectModule} from "@ng-select/ng-select";
import { CloseButtonComponent } from './close-button/close-button.component';
import { DatalistComponent } from './datalist/datalist.component';

@NgModule({
    declarations: [
        AppComponent,
        ButtonsComponent,
        EmailValidatorDirective,
        TextboxComponent,
        CheckboxComponent,
        RadiobuttonComponent,
        TextareaComponent,
        DatepickerComponent,
        DropdownComponent,
        CloseButtonComponent,
        DatalistComponent,
    ],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, NgSelectModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
