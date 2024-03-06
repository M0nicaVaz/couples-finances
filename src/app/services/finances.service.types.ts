import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export interface Finance {
  id: string;
  name: string;
  value: number;
}

export interface FinanceResponse {
  data: Finance[];
  total: number;
}
