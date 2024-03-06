import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { FinanceResponse } from './finances.service.types';

@Injectable({
  providedIn: 'root',
})
export class FinancesService {
  constructor(private apiService: ApiService) {}

  getOutcomes = (url: string, params: any): Observable<FinanceResponse> => {
    return this.apiService.get(url, params);
  };

  getIncomes = (url: string, params: any): Observable<FinanceResponse> => {
    return this.apiService.get(url, params);
  };
}
