import { Component } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [MainPageComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'instagram-clone';
}
