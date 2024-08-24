import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // template:'<h1>Ola live</h1>'
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'projeto1 Daniel';
}