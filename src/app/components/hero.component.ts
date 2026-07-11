import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero-section" id="home">
      <div class="hero-background">
        <img src="assets/images/hero.jpg" alt="Eco Industrial Biomass Factory" class="hero-bg-img">
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-container">
        <div class="hero-content">
          <span class="badge">Renewable & Reliable Energy</span>
          <h1 class="hero-title">Reliable Biomass Fuel Solutions for Industry</h1>
          <p class="hero-desc">
            Manufacturing and supplying rice husk-based biomass pellets for thermal power plants, cement plants, and industrial boilers. Based in Durg, Chhattisgarh.
          </p>
          <div class="hero-actions">
            <a href="#products" class="btn btn-primary">Explore Products</a>
            <a href="#contact" class="btn btn-secondary">Get Free Quote</a>
          </div>
        </div>
      </div>
      <div class="hero-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,87.43,26.54,188.8,54.1,220.31,68.6,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
    </section>
  `
})
export class HeroComponent {}
