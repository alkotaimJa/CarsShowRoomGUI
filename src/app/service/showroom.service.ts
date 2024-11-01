import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShowroomService {


  constructor(private http: HttpClient) { }

  getShowrooms(): Observable<any[]> {
    const baseUrl = environment.backend.carShowRoom.fetchShowroom;
    return this.http.get<any[]>(baseUrl);
  }
}
