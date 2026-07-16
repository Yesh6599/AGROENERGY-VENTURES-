import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="main-footer">
      <div class="container footer-container">
        <div class="footer-brand">
          <a href="#" class="logo-area">
            <img src="assets/images/logo.jpg" alt="AgroEnergy Ventures Logo" class="logo-img">
            <div class="logo-text">
              <span class="brand-name text-white">AgroEnergy</span>
              <span class="brand-sub">Ventures</span>
            </div>
          </a>
          <p class="footer-desc text-gray">
            GST-registered and MSME-recognized biomass pellet manufacturing company based in Kanakot, Durg, Chhattisgarh. Providing high-density, eco-friendly rice husk fuel solutions.
          </p>
          <div class="footer-registrations">
            <span class="reg-tag">GST Compliant</span>
            <span class="reg-tag">MSME Registered</span>
            <span class="reg-tag">Udyam Registered</span>
          </div>
          <div class="footer-socials">
            <a href="https://www.linkedin.com/in/agroenergyventures-cg" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn Profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
        
        <div class="footer-links">
          <h4>Quick Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Our Product</a></li>
            <li><a href="#calculator">Fuel Calculator</a></li>
            <li><a href="#process">Manufacturing</a></li>
            <li><a href="#industries">Industries Served</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        
        <div class="footer-contact-summary">
          <h4>Contact & Locations</h4>
          <p style="margin-bottom: 8px; font-size: 0.85rem; line-height: 1.4;">
            <strong>Reg. Office:</strong> In front of Nagar Palika Nigam office Bhilai-Charoda, Shanti Nagar Bhilai-3, Bhilai, District Durg, CG - 490021
          </p>
          <p style="margin-bottom: 8px; font-size: 0.85rem; line-height: 1.4;">
            <strong>Factory:</strong> Plot No./ Khasra No. - 941/3, Village Kanakot, Tehsil Patan, District Durg, CG - 491221
          </p>
          <div class="footer-contact-details" style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--glass-border);">
            <p style="font-size: 0.85rem;"><strong>Phones:</strong> +91 9810306892, +91 9990143908</p>
            <p style="font-size: 0.85rem;"><strong>Emails:</strong> contact&#64;agroenergyventures.in / agroenergyventures&#64;gmail.com</p>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="container">
          <p>&copy; 2026 AgroEnergy Ventures. All Rights Reserved. Designed for Clean Energy & Sustainable Development.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
