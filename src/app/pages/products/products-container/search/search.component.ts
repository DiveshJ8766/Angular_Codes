import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchProduct: string = '';

  @Output() searchTextEvent: EventEmitter<string> = new EventEmitter<string>();

  // onSearchChange(){
  //   this.searchTextEvent.emit(this.searchProduct);
  // }

  onSearchChange(ele:HTMLInputElement) {
    this.searchProduct = ele.value;
    this.searchTextEvent.emit(this.searchProduct);
  }
}
