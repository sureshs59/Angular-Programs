import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import {
  MetalRate,
  MetalRateService,
  RateHistory
} from '../services/metal-rate.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  rates: MetalRate[] = [];
  goldHistory: RateHistory[] = [];
  silverHistory: RateHistory[] = [];

  loading = false;
  errorMessage = '';

  constructor(private metalRateService: MetalRateService) {}

  ngOnInit(): void {
    this.loadDashboard();
  }

  loadDashboard(): void {
    this.loading = true;
    this.errorMessage = '';

    forkJoin({
      todayRates: this.metalRateService.getTodayRates(),
      goldHistory: this.metalRateService.getGoldHistory(),
      silverHistory: this.metalRateService.getSilverHistory()
    }).subscribe({
      next: (result) => {
        this.rates = result.todayRates;
        this.goldHistory = result.goldHistory;
        this.silverHistory = result.silverHistory;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to load rate data';
        this.loading = false;
      }
    });
  }
}