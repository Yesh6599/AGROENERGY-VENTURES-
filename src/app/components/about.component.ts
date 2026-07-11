import { Component } from '@angular/core';

interface StrengthItem {
  title: string;
  desc: string;
  iconSvg: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="about-section section-padding" id="about">
      <div class="container">
        <div class="section-grid">
          <div class="about-content">
            <span class="section-badge">About Us</span>
            <h2 class="section-title">AgroEnergy Ventures (AEV)</h2>
            <p class="lead-text">
              We are a GST-registered and MSME-recognized biomass pellet manufacturing company based in Kanakot Village, District Durg, Chhattisgarh.
            </p>
            <p class="body-text">
              Our state-of-the-art facility features a <strong>24 TPD Ring Die Pellet Plant</strong>. Located in one of India's major rice-producing belts, we enjoy consistent sourcing of raw materials (rice husk) and maintain an efficient supply network.
            </p>
            <p class="body-text">
              We build our long-term business partnerships on three core values: <strong>consistency, transparency, and reliability</strong>. We combine modern technology with strict quality monitoring to support industries in transitioning to clean energy.
            </p>
            
            <div class="strengths-highlight">
              <h3>Why Choose Us?</h3>
              <ul class="strengths-list">
                @for (item of strengths; track item.title) {
                  <li>
                    <span class="strength-icon" [innerHTML]="item.iconSvg"></span>
                    <div>
                      <strong>{{ item.title }}</strong>
                      <span>{{ item.desc }}</span>
                    </div>
                  </li>
                }
              </ul>
            </div>
          </div>
          
          <div class="about-image-wrapper">
            <div class="img-card">
              <img src="assets/images/factory.jpg" alt="AEV Manufacturing Facility" class="about-img">
              <div class="img-badge">
                <span class="img-badge-num">24</span>
                <span class="img-badge-text">TPD Capacity</span>
              </div>
            </div>
            <div class="location-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div>
                <strong>Located in Chhattisgarh</strong>
                <span>Kanakot, Tehsil Patan, Durg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  strengths: StrengthItem[] = [
    {
      title: 'Quality Sourced Residue',
      desc: 'Premium rice husk biomass for superior heat output.',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
    },
    {
      title: 'Modern Ring Die Press',
      desc: 'Ensures uniform density, shape, and moisture control.',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
    },
    {
      title: 'Flexible Transport & Packaging',
      desc: 'Bulk (loose) or bagged delivery direct to your site.',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2" ry="2"/><line x1="16" y1="8" x2="20" y2="8"/><line x1="16" y1="12" x2="23" y2="12"/><line x1="1" y1="16" x2="23" y2="16"/><path d="M6 16v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4"/></svg>'
    }
  ];
}
