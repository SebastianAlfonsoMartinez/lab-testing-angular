import { Component } from '@angular/core';

@Component({
  selector: 'app-greetings',
  template: '<p class="mensaje">Valor por defecto</p>',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent {
  mensaje: string = 'Valor por defecto';
}
