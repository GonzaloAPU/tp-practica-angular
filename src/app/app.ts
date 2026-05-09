import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Punto1 } from './components/punto1/punto1';
import { Punto2 } from './components/punto2/punto2';
import { Punto3 } from './components/punto3/punto3';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Punto1, Punto2, Punto3],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular');
}
