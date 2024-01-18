import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAction } from '../model/userAction';

@Injectable({
  providedIn: 'root'
})
export class StoryPointService {

  private apiUrl = `http://127.0.0.1:8000`

  constructor(private http: HttpClient) {}

  updateRoomData(roomId: string, data: UserAction): Observable<any> {
    const url = `${this.apiUrl}/room/${roomId}/update`;
    return this.http.put(url, data);
  }
}
