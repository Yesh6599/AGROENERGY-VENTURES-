import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

interface StatItem {
  current: number;
  target: number;
  suffix: string;
  label: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  template: `
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          @for (stat of statItems; track stat.label) {
            <div class="stat-card">
              <div class="stat-num-wrapper">
                <span class="stat-num">{{ stat.current }}</span>
                <span class="stat-plus">{{ stat.suffix }}</span>
              </div>
              <p class="stat-label">{{ stat.label }}</p>
            </div>
          }
          
          <div class="stat-card">
            <span class="stat-label-icon">Ring Die</span>
            <p class="stat-label">Pelleting Technology</p>
          </div>
          <div class="stat-card">
            <span class="stat-label-icon">MSME</span>
            <p class="stat-label">GST & Udyam Registered</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class StatsComponent implements AfterViewInit, OnDestroy {
  statItems: StatItem[] = [
    { current: 0, target: 24, suffix: 'TPD', label: 'Production Capacity' },
    { current: 0, target: 100, suffix: '%', label: 'Eco-Friendly Rice Husk' }
  ];

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startCountdowns();
          this.observer?.disconnect(); // Trigger only once
        }
      });
    }, { threshold: 0.2 });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private startCountdowns() {
    this.statItems.forEach(item => {
      const duration = 2000; // 2 seconds
      const stepTime = Math.max(Math.floor(duration / item.target), 15);
      
      const timer = setInterval(() => {
        item.current++;
        if (item.current >= item.target) {
          item.current = item.target;
          clearInterval(timer);
        }
      }, stepTime);
    });
  }
}
