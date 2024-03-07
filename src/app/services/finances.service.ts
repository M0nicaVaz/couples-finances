import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  FinanceInput,
  GetFinanceResponse,
} from '../interfaces/finances.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FinancesService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getOutcomes = (url: string): Observable<GetFinanceResponse> => {
    return this.http.get<GetFinanceResponse>(`${this.baseUrl}/${url}`);
  };

  getIncomes = (url: string): Observable<GetFinanceResponse> => {
    return this.http.get<GetFinanceResponse>(`${this.baseUrl}/${url}`);
  };

  addOutcome = (url: string, data: FinanceInput) => {
    return this.http.post(`${this.baseUrl}/${url}`, data);
  };

  addIncome = (url: string, data: FinanceInput) => {
    return this.http.post(`${this.baseUrl}/${url}`, data);
  };
}
