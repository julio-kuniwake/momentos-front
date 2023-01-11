import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  name: string = 'julio';
  age: number = 34;
  job = 'programador';
  sexo = 'masculino';

  hobbies = ["Correr", "pescar", "jogar"]
  car = {
    nome: "Creta",
    ano: "2021",
    cor: "prata"
  }

  constructor() {}

  ngOnInit(): void {}
}
