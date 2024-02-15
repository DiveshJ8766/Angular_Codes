import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input() all= 0;
  @Input() instock = 0;
  @Input() notInstock = 0;

  selectedOption:string = 'all';

  @Output() selectedOptionChanged:EventEmitter<string> = new EventEmitter<string>();

  onselectedOption(){
    this.selectedOptionChanged.emit(this.selectedOption);
  }

}
