import { Component } from '@angular/core';
// import { FooterComponent } from '../footer/footer.component';
import { FooterModule } from '../footer/footer.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name = "sou lindo";
  teste(){
    console.log("foi")
  }
  fotoUrl = "https://rvideos1.memedroid.com/videos/UPLOADED918/63d3cd8dede7f.webp"; 

  lista = ["name1", "name2", "name3"]

}
