import { Component } from '@angular/core';

@Component({
  selector: 'app-product-specs',
  standalone: true,
  template: `
    <section class="products-section section-padding section-bg" id="products">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-badge">Our Product</span>
          <h2 class="section-title text-white">Rice Husk Biomass Pellets</h2>
          <p class="section-subtitle text-gray">
            High-density, eco-friendly energy solution manufactured for consistent burning rate and optimal heating.
          </p>
        </div>
        
        <div class="product-grid">
          <div class="product-image-area">
            <div class="product-img-card">
              <img src="assets/images/pellets.jpg" alt="Biomass Pellets Close Up" class="product-img">
              <div class="glass-specs-badge">
                <strong>Diameter:</strong> 6 – 10 mm
              </div>
            </div>
          </div>
          
          <div class="product-specs-area">
            <h3 class="specs-heading text-white">Typical Specifications</h3>
            
            <div class="specs-table-wrapper">
              <table class="specs-table">
                <tbody>
                  <tr>
                    <td><strong>Raw Material</strong></td>
                    <td>100% Rice Husk (Agricultural Residue)</td>
                  </tr>
                  <tr>
                    <td><strong>Pellet Diameter</strong></td>
                    <td>6 – 10 mm (Standard)</td>
                  </tr>
                  <tr>
                    <td><strong>Bulk Density</strong></td>
                    <td>&ge; 600 kg/m³</td>
                  </tr>
                  <tr>
                    <td><strong>Moisture Content</strong></td>
                    <td>Controlled & Optimized</td>
                  </tr>
                  <tr>
                    <td><strong>Gross Calorific Value (GCV)</strong></td>
                    <td>Available on Request</td>
                  </tr>
                  <tr>
                    <td><strong>Packaging & Supply</strong></td>
                    <td>Loose (Bulk Tip Trailers) / Bagged (HDPE Bags)</td>
                  </tr>
                  <tr>
                    <td><strong>Technology</strong></td>
                    <td>Ring Die Extrusion Pellet Mill</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="specs-note-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              <p>We perform regular batch inspections before shipping to ensure proper compliance with moisture and density targets.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProductSpecsComponent {}
