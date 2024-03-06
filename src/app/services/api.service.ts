import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from './api.service.types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://localhost:8000';

  constructor(private httpClient: HttpClient) {}

  get<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.get<T>(
      `${this.baseUrl}/${url}`,
      options
    ) as Observable<T>;
  }
}
