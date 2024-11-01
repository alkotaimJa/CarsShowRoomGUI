import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCars(id: string, page: number = 0, size: number = 10, sort: string = '', sortOrder: string = 'asc'): Observable<any> {
    const url = `${environment.backend.Cars.fetchCars}/${id}?page=${page}&size=${size}&sort=${sort},${sortOrder}`;
    return this.http.get<any>(url);
  }
}
