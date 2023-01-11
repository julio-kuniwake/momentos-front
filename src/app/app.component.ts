import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Ana Caroline';

  userData = {
    email: 'ana@gmail.com',
    idade: 30,
    role: 'Admin',
  };

  title = 'momentos-front';
}
