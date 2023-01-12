import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css'],
})
export class ChangeNumberComponent {
  // Está enviando o evento 'changeNumber', para o componente pai
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.changeNumber.emit(); // Aqui esta emitindo o evento
    console.log('Mudou o numero');
  }
}
