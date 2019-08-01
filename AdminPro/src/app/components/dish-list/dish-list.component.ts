import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styles: []
})
export class DishListComponent implements OnInit {

  @Input() items: [] = [];
  @Output() itemEmitter: EventEmitter<object> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('Inicia componente dishList');
    console.log(this.items);
  }

  showItem(item) {
    this.itemEmitter.emit(item);
  }
}
