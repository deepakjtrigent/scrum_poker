import { Injectable } from '@angular/core';
import { ToastService, toastState } from './toast.service';
import { BehaviorSubject } from 'rxjs';
// wss://scrum-poker-testing-xl2c.onrender.com/room';
@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket!: WebSocket;
  private readonly socketUrl: string = 'ws://localhost:8000/room';
  public connected: boolean = false;
  public recievedMessage: BehaviorSubject<any> = new BehaviorSubject('');
  constructor(private toast: ToastService) {}

  public connect(roomId: string): void {
    this.socket = new WebSocket(`${this.socketUrl}/${roomId}`);
    this.socket.onopen = (event: Event): void => {
      this.connected = true;
    };

    this.socket.onmessage = (event: MessageEvent<string>): void => {
      const message: string = event.data;
      this.recievedMessage.next(message);
      // this.toast.showToast(message, toastState.success);
    };

    this.socket.onclose = (event: Event): void => {
      console.log('WebSocket connection closed:', event);
      this.connected = false;
    };

    this.socket.onerror = (): void => {
      this.toast.showToast('Something went Bad', toastState.danger );
      this.connected = false;
    };
  }

  public sendMessage(data: any): void {
    this.socket.send(data);
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.close();
      this.connected = false;
    }
  }
}
