import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MetalRate {
  metal: string;
  todayRate: number;
  yesterdayRate: number;
  unit: string;
  change: number;
  changePercent: number;
}

export interface RateHistory {
  date: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class MetalRateService {

  private baseUrl = 'http://localhost:8080/api/rates';

  constructor(private http: HttpClient) {}

  getTodayRates(): Observable<MetalRate[]> {
    return this.http.get<MetalRate[]>(`${this.baseUrl}/today`);
  }

  getGoldHistory(): Observable<RateHistory[]> {
    return this.http.get<RateHistory[]>(`${this.baseUrl}/history/gold`);
  }

  getSilverHistory(): Observable<RateHistory[]> {
    return this.http.get<RateHistory[]>(`${this.baseUrl}/history/silver`);
  }
}