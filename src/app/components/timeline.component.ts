import { Component } from '@angular/core';

interface StepData {
  stage: string;
  title: string;
  desc: string;
  objective: string;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  template: `
    <section class="process-section section-padding section-bg" id="process">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-badge">Production Workflow</span>
          <h2 class="section-title text-white">How We Manufacture Pellets</h2>
          <p class="section-subtitle text-gray">
            We maintain structured, quality-controlled stages to convert raw agricultural residue into premium-grade industrial fuels.
          </p>
        </div>

        <!-- Stepper Container -->
        <div class="stepper-wrapper">
          <div class="stepper-timeline" id="stepperTimeline">
            @for (step of steps; track step.stage; let idx = $index) {
              <button 
                class="step-node" 
                [class.active]="activeStepIndex === idx" 
                (click)="selectStep(idx)">
                <span class="step-num-circle">{{ idx + 1 }}</span>
                <span class="step-node-label">{{ step.label }}</span>
              </button>
            }
          </div>

          <div class="step-content-display">
            <div class="step-card">
              <div class="step-details-header">
                <span class="step-index-badge">{{ activeStep.stage }}</span>
                <h3>{{ activeStep.title }}</h3>
              </div>
              <p class="step-details-desc">{{ activeStep.desc }}</p>
              <div class="step-detail-meta">
                <strong>Key Objective:</strong> {{ activeStep.objective }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TimelineComponent {
  activeStepIndex = 0;

  steps: (StepData & { label: string })[] = [
    {
      stage: 'Stage 01',
      label: 'Sourcing',
      title: 'Rice Husk Sourcing & Reception',
      desc: 'We source our primary raw material, rice husk, from reliable agricultural networks and rice mills in Durg and across Chhattisgarh\'s core rice belt. Rigid supply agreements ensure uninterrupted manufacturing operation.',
      objective: 'Maintain uniform raw material inflow and build solid seasonal stockpiles.'
    },
    {
      stage: 'Stage 02',
      label: 'Inspection',
      title: 'Raw Material Quality Inspection',
      desc: 'Every truckload of rice husk undergoes manual and sensor-based moisture testing. We verify that the raw material is free from soil, excess sand, foreign particles, or heavy decomposition before dumping into processing silos.',
      objective: 'Filter out contaminants to prevent ash buildup and secure pellet density standards.'
    },
    {
      stage: 'Stage 03',
      label: 'Conditioning',
      title: 'Drying & Thermal Conditioning',
      desc: 'The husk is transferred to our conditioning unit. If the moisture is too high, it goes through controlled drying. We then condition the husk with moisture/steam adjustments to ensure the natural binders (lignin) are ready for extrusion.',
      objective: 'Achieve uniform moisture percentage (around 10-12%) for high binding strength.'
    },
    {
      stage: 'Stage 04',
      label: 'Pelletization',
      title: 'Pelletization (Ring Die Technology)',
      desc: 'The conditioned husk is fed into our 24 TPD Ring Die Pellet Press. High pressure forces the material through industrial dies, compressing it to form dense, uniform cylindrical pellets. No synthetic chemicals or binders are added.',
      objective: 'Create structurally durable 6–10 mm pellets with high bulk density (≥600 kg/m³).'
    },
    {
      stage: 'Stage 05',
      label: 'Testing',
      title: 'Routine Quality Testing',
      desc: 'Our on-site operators inspect representative pellet batches for visual quality, consistent shape, and thermal characteristics. We monitor pellet durability and physical dimensions to ensure they fit clean industrial combustion requirements.',
      objective: 'Validate key parameters like size consistency, low moisture, and robust density.'
    },
    {
      stage: 'Stage 06',
      label: 'Storage',
      title: 'Product Storage & Bagging',
      desc: 'Finished pellets are cooled and routed into clean storage setups. Depending on commercial requirements, pellets are either routed to loose bulk bunkers or filled into protective HDPE sacks for customized bagged supply.',
      objective: 'Protect final inventory from external humidity, moisture degradation, and damage.'
    },
    {
      stage: 'Stage 07',
      label: 'Dispatch',
      title: 'Dispatch & Logistics Transport',
      desc: 'With transportation support, we load pellets onto bulk tip trailers (loose supply) or cargo trucks (bagged supply). We ensure strict tracking, proper billing paperwork, and on-time dispatch coordination to our partners\' sites.',
      objective: 'Guarantee reliable, prompt freight delivery and dependable customer service.'
    }
  ];

  get activeStep(): StepData {
    return this.steps[this.activeStepIndex];
  }

  selectStep(index: number) {
    this.activeStepIndex = index;
  }
}
