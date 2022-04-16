import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-datalist',
    templateUrl: './datalist.component.html',
    styleUrls: ['./datalist.component.scss']
})
export class DatalistComponent implements OnInit {
    @Input() public textStyle: string = 'dropdown';
    @Input() placeholder: string = 'Select';
    @Input() typeToSearchText: string = '';
    @Input() dropdownPosition: any = 'auto';
    @Input() disabled: boolean = false;
    @Input() searchable: boolean = true;
    @Input() multiple: boolean = false;
    @Input() bindLabel: string = 'name';
    @Input() dropdownData: any;
    @Input() selectedItems: any;
    @Output() onSelect = new EventEmitter<{}>();
    mySelect = [];
    selectedValue: any;
    ngOnInit() {
        console.log(this.dropdownData)
    }

    detectChangedSelection(selectedItemsDrop: any) {
        console.log(selectedItemsDrop.value);
        console.log(this.selectedItems);
        this.onSelect.emit(selectedItemsDrop.value);
    }

}
