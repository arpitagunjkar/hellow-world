import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'First_Angular_Project'; 
  name = 'Dorimon';
  imageUrl =
    'https://e1.pxfuel.com/desktop-wallpaper/816/992/desktop-wallpaper-doraemon-20-dorimon.jpg';
  isDisabled = true;
  count = 0;
  fun() {
    this.count++;
  }
}