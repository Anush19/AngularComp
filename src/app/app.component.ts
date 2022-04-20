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
  programList=[{
    id:"HS",
    selected:false,
    name:"Health Care Coverage",
    program_id:"hsId",
    program_desc:"Includes CHIP, Medical Assistance, Medicaid for Former Foster Care Youth, Mental Health/Substance Abuse, Pennsylvania's Health Insurance Marketplace (Pennie)",
    program_link:"www.google.com",
    program_link_desc:"More Information About Health Care Coverage"
    },
    {
    id:"FS",
    selected:false,
    name:"Food Assistance",
    program_id:"fsId",
    program_desc:"Supplemental Nutrition Assistance Program (SNAP)",
    program_link:"www.google.com",
    program_link_desc:"More Information About Food Assistance"
    
    
    
    },
    {
    id:"CA",
    selected:false,
    name:"Cash Assistance",
    program_id:"caId",
    program_desc:"Series of programs that provide cash to individuals or families in need.",
    program_link:"www.google.com",
    program_link_desc:"More Information About Cash Assistance"
    
    
    
    },
    {
    id:"BL",
    selected:false,
    name:"Free or Reduced Price School Meals",
    program_id:"rpId",
    program_desc:"Provides low-cost or free school lunches to eligible children.",
    program_link:"www.google.com",
    program_link_desc:"More Information About Free or Reduced Price School Meals"
    
    
    
    },
    {
    id:"LH",
    selected:false,
    name:"Help With Paying Your Heating Bill",
    program_id:"liId",
    program_desc:"Low-Income Home Energy Assistance Program (LIHEAP) provides child care financial assistance for eligible families",
    program_link:"www.google.com",
    program_link_desc:"More Information About the LIHEAP Program"
    
    
    
    }
    ,
    {
    id:"CI",
    selected:false,
    name:"Help With Childcare Costs",
    program_id:"ccId",
    program_desc:"Provides child care financial assistance for eligible families",
    program_link:"www.google.com",
    program_link_desc:"More Information About Childcare Assistance"
    
    
    
    }
    ,
    {
    id:"NA",
    selected:false,
    name:"None of the Above",
    program_id:"naId",
    program_desc:"",
    program_link:"",
    program_link_desc:""
    
    
    
    }
    ];
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
  alert(event: any){
    console.log('checkbox', event);
  }
  onCheckboxChange(id,index,selected){
    console.log('id', id);
    console.log('index', index);
    console.log('selected', selected);
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
