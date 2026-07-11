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
          <h4>Address & Info</h4>
          <p>AgroEnergy Ventures</p>
          <p>Village Kanakot, Tehsil Patan,</p>
          <p>District Durg, Chhattisgarh (India)</p>
          <div class="footer-contact-details">
            <p><strong>Phones:</strong> +91 9810306892, +91 9990143908</p>
            <p><strong>Email:</strong> agroenergyventures@gmail.com</p>
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
