import { Component } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { StatsComponent } from './components/stats.component';
import { AboutComponent } from './components/about.component';
import { ProductSpecsComponent } from './components/product-specs.component';
import { CalculatorComponent } from './components/calculator.component';
import { TimelineComponent } from './components/timeline.component';
import { IndustriesComponent } from './components/industries.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    StatsComponent,
    AboutComponent,
    ProductSpecsComponent,
    CalculatorComponent,
    TimelineComponent,
    IndustriesComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'agroenergy-ventures-angular';
}
