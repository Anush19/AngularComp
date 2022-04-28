import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.scss']
})
export class SingleSelectComponent {

  @Input() selectStyle: string = '';
  @Input() placeholder: string = 'Select';
  @Input() disabled: boolean = false;
  @Input() bindLabel: string = 'name';
  @Input() label: string = '';
  @Input() dropdownData: any;
  @Input() selectedItem: any ='select';
  @Input() required: boolean = false;
  @Input() requiredText: string = '';
  @Input() showFieldHelpText: boolean = true;
  @Input() hintClass: string = '';
  @Input() helpText: string = '';
  @Input() showError = false;

  @Output() onSelect = new EventEmitter<{}>();

  detectChangedSelection(event: any) {
    console.log(event.value);
    this.onSelect.emit(this.selectedItem);
  }

}
