import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
popupImage: string | null = null;

openPopup(img: string) {
  this.popupImage = img;
}

closePopup() {
  this.popupImage = null;
}
}
