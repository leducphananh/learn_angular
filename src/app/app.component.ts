import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { FavoriteComponent } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoursesComponent, FavoriteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  post = {
    title: 'hello-world',
    isFavorite: true,
  };

  onFavoriteChange(isFavorite: boolean) {
    this.post.isFavorite = isFavorite;
  }
}
