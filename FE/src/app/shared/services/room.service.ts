import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateRoomResponse } from '../model/roomId';
import { scrumPokerUrls } from '../url';
import { User } from '../model/user';
import { UserAction } from '../model/userAction';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private http: HttpClient) {}

  public createRoom(seriesName:any): Observable<CreateRoomResponse> {
    return this.http.post<any>(scrumPokerUrls.createRoomUrl, {seriesName});
  }

  public joinRoom(roomId: string, user_details: User): Observable<User> {
    return this.http.post<any>(
      `${scrumPokerUrls.roomUrls}/${roomId}/join`,
      user_details
    );
  }

  public updateStoryPoint(
    roomId: string,
    userAction: UserAction
  ): Observable<UserAction> {
    return this.http.put<UserAction>(
      `${scrumPokerUrls.roomUrls}/${roomId}/update`,
      userAction
    );
  }

  public heartBeat(roomId: string, userAction: any): Observable<any> {
    return this.http.post<any>(
      `${scrumPokerUrls.roomUrls}/${roomId}/heartbeat`,
      userAction
    );
  }

  public revealStoryPoints(
    roomId: string,
    userAction: UserAction
  ): Observable<UserAction> {
    return this.http.put<UserAction>(
      `${scrumPokerUrls.roomUrls}/${roomId}/reveal`,
      userAction
    );
  }

  public resetStoryPoints(
    roomId: string,
    userAction: UserAction
  ): Observable<UserAction> {
    return this.http.put<UserAction>(
      `${scrumPokerUrls.roomUrls}/${roomId}/reset`,
      userAction
    );
  }
}
