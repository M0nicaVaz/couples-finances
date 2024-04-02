import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  FinanceInput,
  GetFinanceResponse,
} from '../interfaces/finances.interface';
import { HttpClient } from '@angular/common/http';
import { data } from './outcome-mock';

@Injectable({
  providedIn: 'root',
})
export class FinancesService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}
  /* incomes */

  getIncomes = (url: string): Observable<GetFinanceResponse> => {
    return this.http.get<GetFinanceResponse>(`${this.baseUrl}/${url}`);
  };

  addIncome = (url: string, data: FinanceInput) => {
    return this.http.post(`${this.baseUrl}/${url}`, data);
  };

  editIncome = (url: string, data: FinanceInput) => {
    return this.http.put(`${this.baseUrl}/${url}`, data);
  };

  /* outcomes */

  getOutcomes = (url: string): GetFinanceResponse => {
  return {data};
    // return this.http.get<GetFinanceResponse>(`${this.baseUrl}/${url}`);
  };

  addOutcome = (url: string, data: FinanceInput) => {
    return this.http.post(`${this.baseUrl}/${url}`, data);
  };

  deleteOutcome = (url: string) => {
    return this.http.delete(`${this.baseUrl}/${url}`);
  };

  editOutcome = (url: string, data: FinanceInput) => {
    return this.http.put(`${this.baseUrl}/${url}`, data);
  };
}
