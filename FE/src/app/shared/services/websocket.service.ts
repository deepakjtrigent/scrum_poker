import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket!: WebSocket;
  private readonly socketUrl: string = 'ws://localhost:8000/room';
  public connected: boolean = false;

  constructor(private toast: ToastService,private http:HttpClient) {}

  public connect(roomId : string): void {
    this.socket = new WebSocket(`${this.socketUrl}/${roomId}`);
    this.socket.onopen = (event: Event): void => {
      console.log('WebSocket connection established.');
      this.connected = true;
    };

    this.socket.onmessage = (event: MessageEvent<string>): void => {
      const message: string = event.data;
      this.toast.showToast(message);
    };

    this.socket.onclose = (event: Event): void => {
      console.log('WebSocket connection closed:', event);
      this.connected = false;
    };

    this.socket.onerror = (): void => {
      this.toast.showToast('Something went Bad')
      this.connected = false;
    };
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.close();
      this.connected = false;
    }
  }
  public send(data: {[text: string]: string } | string): void {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(data));
    } else {
      console.error('WebSocket is not open. Cannot send data:', data);
    }
  }

}
