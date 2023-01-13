import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  // Tipando como uma lista de Animal
  animals: Animal[] = [
    { name: 'Luna', type: 'Dog', age: 3 },
    { name: 'Starkao', type: 'Dog doido', age: 5 },
    { name: 'mial', type: 'Cat', age: 6 },
    { name: 'Simba', type: 'Lion', age: 2 },
  ];

  animalDetails = '';

  constructor() {}

  ngOnInit(): void {}

  // Tipando coma interface Animal
  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos.`;
  }
}
