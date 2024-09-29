import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule], // CommonModule importieren, um ngFor und andere Direktiven zu nutzen
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent {

  posts: {name:string;image: string;likes: number; isLiked:boolean}[] = [
    {
      name: 'Kevin´s Banane',
      image: 'assets/banana.jpg',
      likes: 150,
      isLiked: true
    },
    {
      name: 'Horst´s Berrys',
      image: 'assets/currant.jpg',
      likes: 200,
      isLiked: true
    },
    {
      name: 'Chuckeline´s Orangen',
      image: 'assets/orange.jpg',
      likes: 300,
      isLiked: false
    }
  ]

  toggleLike(index: number) {
    if(this.posts[index].likes){
      this.posts[index].isLiked = false;
      this.posts[index].likes--;
    } else {
      this.posts[index].isLiked = true;
      this.posts[index].likes++;
    }
  }

}
