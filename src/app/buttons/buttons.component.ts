import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent  {
  @Input() public textStyle: string = '';
  @Input() public buttonId: string = '';
  @Input() public buttonType: string = '';
  @Input() public buttonLabel: string = '';
  @Input() public tooltipPosition: any = '';
  @Input() public tooltipText: string = '';
  @Input() public tooltipType: string = 'tooltip';
  @Input() public disabled: boolean = false;
  @Output() onClick = new EventEmitter<string>();

  clicked() {
    this.onClick.emit(this.buttonLabel);
  }
}
