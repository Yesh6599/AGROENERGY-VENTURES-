import { Component } from '@angular/core';

interface IndustryItem {
  title: string;
  desc: string;
  iconSvg: string;
}

@Component({
  selector: 'app-industries',
  standalone: true,
  template: `
    <section class="industries-section section-padding" id="industries">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-badge">Target Consumers</span>
          <h2 class="section-title">Industries We Serve</h2>
          <p class="section-subtitle">
            Our biomass pellets are manufactured as a drop-in replacement or co-firing agent for a wide variety of high-temperature combustion systems.
          </p>
        </div>

        <div class="industries-grid">
          @for (industry of industries; track industry.title) {
            <div class="industry-card">
              <div class="industry-icon-wrapper" [innerHTML]="industry.iconSvg"></div>
              <h4>{{ industry.title }}</h4>
              <p>{{ industry.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class IndustriesComponent {
  industries: IndustryItem[] = [
    {
      title: 'Thermal Power Plants',
      desc: 'Co-firing rice husk pellets directly with coal reduces overall carbon emissions and fulfills statutory green-energy targets.',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20M5 17V7h4v10M13 17V3h4v14"/></svg>'
    },
    {
      title: 'Industrial Boilers',
      desc: 'Delivers stable calorific output and uniform combustion rates, ideal for high-pressure manufacturing boilers.',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'
    },
    {
      title: 'Cement Plants',
      desc: 'Serves as a reliable co-fuel source in rotary kilns, helping reduce carbon tax overhead and coal reliance.',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>'
    },
    {
      title: 'Steel & Sponge Iron',
      desc: 'Integrates into heating and calcination processes to lower coal consumption and support sustainable metallurgy.',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>'
    },
    {
      title: 'Paper & Pulp Industries',
      desc: 'Meets the high steam demands of pulp processing and paper-drying sections with steady boiler heating.',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>'
    },
    {
      title: 'Food Processing',
      desc: 'Clean fuel with controlled moisture, producing low ash levels for steam production in food processing.',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>'
    },
    {
      title: 'Textile Industries',
      desc: 'Powers textile dyeing, finishing, and processing lines which rely on continuous steam generation.',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>'
    },
    {
      title: 'General Industrial Heat',
      desc: 'Perfect for traders, chemical processors, and localized steam/heat operations seeking affordable options.',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
    }
  ];
}
