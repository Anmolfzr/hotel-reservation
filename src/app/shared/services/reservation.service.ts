import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerContactDetailsModel } from '../interfaces/customer-contact-details.interface';

@Injectable({
  providedIn: 'root',
})
export class ReservationService implements OnInit {
  apiUrl: any = 'http://localhost:4200/assets/data.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  listBookings(): Observable<CustomerContactDetailsModel[]> {
    return this.http.get<CustomerContactDetailsModel[]>(this.apiUrl);
  }
}
