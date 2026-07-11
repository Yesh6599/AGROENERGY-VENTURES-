import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface InquiryData {
  name: string;
  company?: string;
  phone: string;
  email: string;
  message: string;
  dailyTons?: number;
  supplyFormat?: string;
  industrySector?: string;
}

@Injectable({
  providedIn: 'root'
})
export class InquiryService {
  // Replace with your Formspree Form ID or Web3Forms access key
  // For Formspree: https://formspree.io/f/your-form-id
  private apiUrl = 'https://formspree.io/f/placeholder'; 

  constructor(private http: HttpClient) {}

  /**
   * Submits the inquiry/contact form data to the email processor API.
   * @param data The user's form message and metrics details
   */
  sendInquiry(data: InquiryData): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  /**
   * Helper to configure/override the API URL dynamically if needed.
   * @param url The new endpoint URL
   */
  setApiUrl(url: string): void {
    this.apiUrl = url;
  }
}
