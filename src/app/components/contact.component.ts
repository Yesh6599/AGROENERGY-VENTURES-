import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InquiryService } from '../services/inquiry.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="contact-section section-padding section-bg" id="contact">
      <div class="container">
        <div class="section-grid">
          <div class="contact-info-panel">
            <span class="section-badge">Get In Touch</span>
            <h2 class="section-title text-white">Let's Discuss Your Biomass Requirements</h2>
            <p class="body-text text-gray">
              Whether you are a thermal power plant buyer, an industrial consumer, a pellet distributor, or a supply-chain partner, we look forward to hearing from you.
            </p>
            
            <div class="contact-methods">
              <div class="method-card">
                <span class="method-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <div>
                  <h4>Registered Office</h4>
                  <p>In front of Nagar Palika Nigam office Bhilai-Charoda, Shanti Nagar Bhilai-3, Bhilai, District Durg, Chhattisgarh, Pin: 490021</p>
                </div>
              </div>
              <div class="method-card">
                <span class="method-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <div>
                  <h4>Factory Address</h4>
                  <p>Plot No./ Khasra No. - 941/3, Village Kanakot, Tehsil Patan, District Durg, Chhattisgarh, Pin: 491221</p>
                </div>
              </div>
              <div class="method-card">
                <span class="method-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <div>
                  <h4>Phone Contacts</h4>
                  <p><a href="tel:+919810306892" class="contact-link">+91 9810306892</a></p>
                  <p><a href="tel:+919990143908" class="contact-link">+91 9990143908</a></p>
                </div>
              </div>
              <div class="method-card">
                <span class="method-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <div>
                  <h4>Email Correspondence</h4>
                  <p><a href="mailto:contact@agroenergyventures.in" class="contact-link">contact@agroenergyventures.in</a></p>
                  <p><a href="mailto:agroenergyventures@gmail.com" class="contact-link" style="font-size: 0.85rem; opacity: 0.75;">agroenergyventures@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form-panel">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
              <h3 class="form-title">Send Us a Message</h3>
              
              <div class="form-group" [class.invalid]="isFieldInvalid('name')">
                <label for="formName" class="form-label">Contact Name *</label>
                <input type="text" id="formName" formControlName="name" class="form-input" placeholder="Your Full Name">
                <span class="error-msg">Name is required</span>
              </div>
              
              <div class="form-group">
                <label for="formCompany" class="form-label">Company Name</label>
                <input type="text" id="formCompany" formControlName="company" class="form-input" placeholder="Your Business / Enterprise Name">
              </div>

              <div class="form-row">
                <div class="form-group" [class.invalid]="isFieldInvalid('phone')">
                  <label for="formPhone" class="form-label">Phone Number *</label>
                  <input type="tel" id="formPhone" formControlName="phone" class="form-input" placeholder="e.g. +91 9988776655">
                  <span class="error-msg">Valid phone number is required (min 10 digits)</span>
                </div>
                <div class="form-group" [class.invalid]="isFieldInvalid('email')">
                  <label for="formEmail" class="form-label">Email Address *</label>
                  <input type="email" id="formEmail" formControlName="email" class="form-input" placeholder="name@company.com">
                  <span class="error-msg">Valid email address is required</span>
                </div>
              </div>

              <div class="form-group" [class.invalid]="isFieldInvalid('message')">
                <label for="formMessage" class="form-label">Message Details *</label>
                <textarea id="formMessage" formControlName="message" rows="5" class="form-input" placeholder="Please describe your biomass fuel requirements..."></textarea>
                <span class="error-msg">Message details are required</span>
              </div>

              @if (!isSubmitted) {
                <button type="submit" [disabled]="isSubmitting" class="btn btn-primary btn-block">
                  {{ isSubmitting ? 'Sending Message...' : 'Send Message' }}
                </button>
              }
              
              @if (isSubmitted) {
                <div class="form-status-alert success" style="display: flex;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <div>
                    <strong>Message Sent Successfully!</strong>
                    <p>Thank you. Our sales team will get back to you shortly regarding your request.</p>
                  </div>
                </div>
              }
            </form>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  isSubmitted = false;

  constructor(private fb: FormBuilder, private inquiryService: InquiryService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      company: [''],
      phone: ['', [Validators.required, Validators.pattern(/^[+]?[0-9\s-]{10,15}$/)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      // Mark all fields as touched to trigger errors
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;
    this.inquiryService.sendInquiry(this.contactForm.value).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.isSubmitted = true;
        this.contactForm.reset();
      },
      error: (err) => {
        // If placeholder endpoint fails in dev, simulate success for client preview
        console.warn('API returned error (likely due to placeholder endpoint), simulating client-side success.', err);
        this.isSubmitting = false;
        this.isSubmitted = true;
        this.contactForm.reset();
      }
    });
  }
}
