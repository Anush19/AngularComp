import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() public textStyle: { [key: string]: string } = {};
  @Input() public textClass: { [key: string]: boolean } = {};
  @Input() radiolabel: string = '';
  @Input() radioButtonGroupName: string = '';
  @Input() disabled: boolean = false;
  @Input() required: boolean = true;
  @Input() maxLength: number = 0;
  selected = [{ id: 3, name: "Volkswagen Ford" }];
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

  ngOnInit() {
    this.restrictInputLength = '3';
  }
  addUser(event: any) {
    console.log('button is clicked', event);
  }
  callbackTextBox(event: any) {
    console.log('Textbox entered', event);
  }
  validateForm(){

  }
  constructor() {
    console.log('constructor');
  }
}
