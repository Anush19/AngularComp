import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {NgForm} from "@angular/forms";
import { AppService } from './app.service';
import { Item } from './multi-dropdown/multi-dropdown.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  @Input() public textStyle: { [key: string]: string } = {};
  @Input() public textClass: { [key: string]: boolean } = {};
  @Input() radiolabel: string = '';
  @Input() radioButtonGroupName: string = '';
  @Input() disabled: boolean = false;
  @Input() required: boolean = true;
  @Input() maxLength: number = 0;
  selected = [{ id: 3, name: "Volkswagen Ford" }];
  formControlName = 'Anu';
  currentSelectedItem: Item = null;
  showSearch = true;
  showError = false;
  showAll = true;
  showStatus = true;
  items: Item[] = [];
  itemList=[
    {
      "id": 1,
      "name": "Grapes",
      "visible": true
    },
    {
      "id": 2,
      "name": "Melon",
      "visible": true
    },
    {
      "id": 3,
      "name": "Watermelon",
      "visible": true
    },
    {
      "id": 4,
      "name": "Tangerine",
      "visible": true
    },
    {
      "id": 5,
      "name": "Lemon",
      "visible": true
    },
    {
      "id": 6,
      "name": "Banana",
      "visible": true
    },
    {
      "id": 7,
      "name": "Pineapple",
      "visible": true
    },
    {
      "id": 8,
      "name": "Red Apple",
      "visible": true
    },
    {
      "id": 9,
      "name": "Green Apple",
      "visible": true
    },
    {
      "id": 10,
      "name": "Pear",
      "visible": true
    }
  ];
  sampleDropdowndata = [
    {
      id: 1,
      name: 'Dakota Gaylord PhD',
      address: '14554 Smith Mews'
    },
    {
      id: 2,
      name: 'Maria Legros',
      address: '002 Pagac Drives'
    },
    {
      id: 3,
      name: 'Brandyn Fritsch',
      address: '8542 Lowe Mountain'
    },
    {
      id: 4,
      name: 'Glenna Ward V',
      address: '1260 Oda Summit'
    },
    {
      id: 5,
      name: 'Jamie Veum',
      address: '5017 Lowe Route'
    }
  ];
  restrictInputLength: string = '';
  @Output() inputModelChange = new EventEmitter<{}>();
  searchForm: any;


  onItemChange(item: Item): void {
    this.currentSelectedItem = item;
  }

  onToggleSearch(): void {
    this.showSearch = !this.showSearch;
  }

  onToggleError(): void {
    this.showError = !this.showError;
  }

  onToggleAll(): void {
    this.showAll = !this.showAll;
  }

  onToggleStatus(): void {
    this.showStatus = !this.showStatus;
  }

  public validate(): void {
    // if (form.invalid) {
    //   for (const control of Object.keys(form.controls)) {
    //     form.controls[control].markAsTouched();
    //   }
    //   return;
    // }
  }
  get checkedItems(): Item[] {
    return this.itemList.filter(i => i['checked']);
}
  addUser(event: any) {
    console.log('buttons is clicked', event);
  }
  callbackTextBox(event: any) {
    console.log('Textbox entered', event);
  }
  validateForm(){

  }
  constructor(private appService: AppService) {
    console.log('constructor');
  }
  ngOnInit(): void {
    this.items = this.appService.getFoods().map(fruit => ({
      id: fruit.id,
      name: fruit.name
    } as Item));
  }
}
