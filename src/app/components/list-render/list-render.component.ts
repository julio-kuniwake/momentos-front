import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  // Lista de animais
  animals = [
    { name: 'Luna', type: 'Dog' },
    { name: 'Starkao', type: 'Dog doido' },
    { name: 'mial', type: 'Cat' },
    { name: 'Simba', type: 'Lion' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
