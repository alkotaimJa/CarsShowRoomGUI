import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Update with correct path

@Injectable({
  providedIn: 'root'
})
export class ShowroomService {

  private baseUrl = environment.backend.carShowRoom.fetchShowRooms;

  constructor(private http: HttpClient) {}

  getShowrooms(page: number = 0, size: number = 10, sort: string = ''): Observable<any> {
    const url = `${environment.backend.carShowRoom.fetchShowRooms}?page=${page}&size=${size}&sort=${sort}`;
    return this.http.get<any>(url);
  }
  viewShowroom(id: string): Observable<any> {
    return this.http.get<any>(`${environment.backend.carShowRoom.deleteShowRoom}/${id}`);
  }

  createShowroom(showroomData: any): Observable<any> {
    return this.http.post<any>(environment.backend.carShowRoom.createShowroom, showroomData);
  }

  updateShowroom(id: string, updatedData: any): Observable<any> {
    return this.http.put<any>(`${environment.backend.carShowRoom.updateShowroom}/${id}`, updatedData);
  }

  deleteShowroom(id: string): Observable<any> {
    return this.http.put<any>(`${environment.backend.carShowRoom.deleteShowRoom}/${id}/delete`, "");
  }
}

