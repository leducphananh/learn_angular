import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  standalone: true,
  imports: [],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
})
export class FavoriteComponent {
  @Input('isFavorite') isFavorite: boolean = true;
  @Output('change') change = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
  }
}
