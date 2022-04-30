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
  @Input() dropdownlabel: string = '';
  @Input() dropdownData: any;
  @Input() selectedItem: any;
  @Input() required: boolean = false;
  @Input() showError = false;

  @Output() onSelect = new EventEmitter<{}>();

  detectChangedSelection(event: any) {
    this.onSelect.emit(event.value);
  }

}
