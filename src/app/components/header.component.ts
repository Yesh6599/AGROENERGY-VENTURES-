import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="main-header" [class.scrolled]="isScrolled">
      <div class="header-container">
        <a href="#" class="logo-area" aria-label="AgroEnergy Ventures Home">
          <img src="assets/images/logo.jpg" alt="AgroEnergy Ventures Logo" class="logo-img">
          <div class="logo-text">
            <span class="brand-name">AgroEnergy</span>
            <span class="brand-sub">Ventures</span>
          </div>
        </a>
        
        <nav class="nav-menu" [class.open]="isMenuOpen">
          <ul class="nav-list">
            <li><a href="#home" class="nav-link" (click)="closeMenu()">Home</a></li>
            <li><a href="#about" class="nav-link" (click)="closeMenu()">About Us</a></li>
            <li><a href="#products" class="nav-link" (click)="closeMenu()">Our Product</a></li>
            <li><a href="#calculator" class="nav-link" (click)="closeMenu()">Fuel Calculator</a></li>
            <li><a href="#process" class="nav-link" (click)="closeMenu()">Manufacturing</a></li>
            <li><a href="#industries" class="nav-link" (click)="closeMenu()">Industries</a></li>
            <li><a href="#contact" class="nav-link" (click)="closeMenu()">Contact</a></li>
          </ul>
        </nav>

        <div class="header-actions">
          <a href="#calculator" class="btn btn-sm btn-outline">Calculate Fuel</a>
          <button class="menu-toggle" [class.open]="isMenuOpen" (click)="toggleMenu($event)" aria-label="Toggle Menu">
            <span class="hamburger"></span>
          </button>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  isScrolled = false;
  isMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Close menu when clicking outside header area
    const target = event.target as HTMLElement;
    if (this.isMenuOpen && !target.closest('.main-header')) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu(event: Event) {
    event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
