import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css'],
})
export class EmitterComponent {
  myNumber: number = 0;

  constructor() {}

  ngOnInit(): void {}

  // Aqui esta pegando o evento 'changeNumber' que o filho enviou
  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * 10);
  }
}
