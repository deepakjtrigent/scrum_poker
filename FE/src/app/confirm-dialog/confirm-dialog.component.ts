import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HeartbeatService } from '../shared/services/heartbeat.service';
import { WebsocketService } from '../shared/services/websocket.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent{
  
  constructor(
    private router: Router,
    public heartbeatService :HeartbeatService,
    public websocketService: WebsocketService,
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {roomId : string}
  ) {}

  public confirm(): void {
    this.router.navigate(['/room', this.data.roomId])
    this.heartbeatService.startwithHeartBeat(this.data.roomId)
    this.dialogRef.close(); 
  }

  public cancel():void {
    this.router.navigate(["/"])
    this.dialogRef.close();  
  }
}
