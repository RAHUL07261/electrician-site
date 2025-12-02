import { Component,HostListener,OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  isMenuOpen = false;

  ngOnInit(): void {
    const yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear().toString();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const menu = document.querySelector('.nav');
    const menuBtn = document.querySelector('.menu-btn');

    // Agar click menu ya menu button ke andar hua to menu band mat karo
    if (menu?.contains(event.target as Node) || menuBtn?.contains(event.target as Node)) {
      return;
    }

    // Baaki kisi bhi jagah click hua → menu close
    this.closeMenu();
  }
}
