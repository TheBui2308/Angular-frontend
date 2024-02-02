import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'your_product_api_url'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getProductById(productId: string): Observable<any> {
    const url = `${this.apiUrl}/products/${productId}`;
    return this.http.get<any>(url);
  }
}
