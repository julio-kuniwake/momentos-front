import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css'],
})
export class IfRenderComponent {
  canShow: boolean = true; // Mostra o texto na div
  // canShow: boolean = false; // Não mostra o texto na div

  name = 'Julio';

  constructor() {}

  ngOnInit(): void {}
}
