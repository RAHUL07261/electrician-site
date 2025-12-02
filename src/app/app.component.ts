import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  isMenuOpen = false;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle("A.K. Electric Services | Mohali’s Trusted Electrician");

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

    // Click inside menu or menu button → don't close
    if (menu?.contains(event.target as Node) || menuBtn?.contains(event.target as Node)) {
      return;
    }

    // Click anywhere else → close menu
    this.closeMenu();
  }
}
