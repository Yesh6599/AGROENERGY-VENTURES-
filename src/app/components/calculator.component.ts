import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="calculator-section section-padding" id="calculator">
      <div class="container">
        <div class="calculator-card">
          <div class="calc-header">
            <h2>Fuel Requirement & Inquiry Builder</h2>
            <p>Select your daily coal/fuel usage or desired pellet volume, choose packaging, and automatically compile a draft inquiry to send to AgroEnergy Ventures.</p>
          </div>
          
          <div class="calc-body">
            <div class="calc-controls">
              <!-- Step 1: Daily Target -->
              <div class="control-group">
                <label for="tonnageInput" class="control-label">
                  <span>Estimated Daily Fuel Target:</span>
                  <span class="calc-value-display"><strong>{{ dailyTonnage }}</strong> Tons / Day</span>
                </label>
                <input type="range" id="tonnageInput" min="1" max="50" [(ngModel)]="dailyTonnage" class="slider-input">
                <div class="slider-labels">
                  <span>1 TPD</span>
                  <span>25 TPD</span>
                  <span>50 TPD</span>
                </div>
              </div>

              <!-- Step 2: Sourcing type -->
              <div class="control-group">
                <label class="control-label">Preferred Supply Format:</label>
                <div class="radio-group">
                  <label class="radio-label">
                    <input type="radio" name="supplyFormat" value="Loose (Bulk Tip Trailers)" [(ngModel)]="supplyFormat">
                    <span class="custom-radio"></span>
                    <span>Bulk Loose (Tip Trailers)</span>
                  </label>
                  <label class="radio-label">
                    <input type="radio" name="supplyFormat" value="Bagged (HDPE Bags)" [(ngModel)]="supplyFormat">
                    <span class="custom-radio"></span>
                    <span>Bagged Supply (HDPE Bags)</span>
                  </label>
                </div>
              </div>

              <!-- Step 3: Industry Type -->
              <div class="control-group">
                <label for="industrySelect" class="control-label">Your Industry Sector:</label>
                <select id="industrySelect" [(ngModel)]="industrySector" class="select-input">
                  <option value="Thermal Power Generation">Thermal Power Plants</option>
                  <option value="Industrial Boilers / Process Heating">Industrial Boilers</option>
                  <option value="Cement Production">Cement Plants</option>
                  <option value="Steel & Sponge Iron Plants">Steel & Sponge Iron Industries</option>
                  <option value="Paper & Pulp Production">Paper & Pulp Industries</option>
                  <option value="Food Processing">Food Processing Industries</option>
                  <option value="Textile Manufacturing">Textile Industries</option>
                  <option value="Other Commercial Boiler Operation">Other Industrial Consumer</option>
                </select>
              </div>
            </div>
            
            <div class="calc-results">
              <h3>Estimated Sourcing Metrics</h3>
              
              <div class="metrics-grid">
                <div class="metric-item">
                  <span class="metric-title">Weekly Biomass Demand</span>
                  <span class="metric-number">{{ weeklyDemand }}</span>
                  <span class="metric-unit">Tons</span>
                </div>
                <div class="metric-item">
                  <span class="metric-title">Monthly Biomass Demand</span>
                  <span class="metric-number">{{ monthlyDemand }}</span>
                  <span class="metric-unit">Tons</span>
                </div>
                <div class="metric-item">
                  <span class="metric-title">Est. Weekly Shipments</span>
                  <span class="metric-number">{{ shipmentCount }}</span>
                  <span class="metric-unit">Trucks (15T Avg)</span>
                </div>
              </div>

              <div class="draft-container">
                <div class="draft-header">
                  <span>Generated Inquiry Draft</span>
                  <button class="btn-copy" (click)="copyDraft()" title="Copy text to clipboard">
                    @if (isCopied) {
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>Copied!</span>
                    } @else {
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                      <span>Copy Draft</span>
                    }
                  </button>
                </div>
                <textarea class="draft-textarea" readonly>{{ inquiryDraftText }}</textarea>
              </div>

              <div class="calc-actions">
                <a [href]="mailtoLink" class="btn btn-primary btn-block">Email Inquiry to AEV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CalculatorComponent {
  dailyTonnage = 10;
  supplyFormat = 'Loose (Bulk Tip Trailers)';
  industrySector = 'Thermal Power Generation';
  isCopied = false;

  get weeklyDemand(): number {
    return this.dailyTonnage * 7;
  }

  get monthlyDemand(): number {
    return this.dailyTonnage * 30;
  }

  get shipmentCount(): number {
    return Math.ceil(this.weeklyDemand / 15);
  }

  get inquiryDraftText(): string {
    return `Dear AgroEnergy Ventures,

We are looking to source rice husk-based biomass pellets for our ${this.industrySector} operations. 

Our estimated fuel requirement details:
- Daily Tonnage: ${this.dailyTonnage} Tons/Day
- Weekly Demand: ${this.weeklyDemand} Tons
- Monthly Requirement: ~${this.monthlyDemand} Tons
- Packaging Preference: ${this.supplyFormat}

We are located in [Insert Your City/District, State]. Please share product availability, delivery logistics options, and your pricing quotation (along with typical GCV specifications).

Regards,
[Your Name / Contact Info]`;
  }

  get mailtoLink(): string {
    const subject = encodeURIComponent("Inquiry for Biomass Pellets - AgroEnergy Ventures");
    const body = encodeURIComponent(this.inquiryDraftText);
    return `mailto:agroenergyventures@gmail.com?subject=${subject}&body=${body}`;
  }

  copyDraft() {
    navigator.clipboard.writeText(this.inquiryDraftText).then(() => {
      this.isCopied = true;
      setTimeout(() => {
        this.isCopied = false;
      }, 2000);
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  }
}
