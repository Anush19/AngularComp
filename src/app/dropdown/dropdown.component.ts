import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
    @Input() public textStyle: string = 'dropdown';
    @Input() placeholder: string = 'Select';
    @Input() typeToSearchText: string = '';
    @Input() dropdownPosition: any = 'auto';
    @Input() disabled: boolean = false;
    @Input() searchable: boolean= true;
    @Input() multiple: boolean = false;
    @Input() bindLabel: string = 'name';
    @Input() dropdownData: any;
    @Input() selectedItems: any;
    @Output() onSelect = new EventEmitter<{}>();



    detectChangedSelection(selectedItems: any) {
        console.log(selectedItems);
        this.onSelect.emit(selectedItems);
    }

}
