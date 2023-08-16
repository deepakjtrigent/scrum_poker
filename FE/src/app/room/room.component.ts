import { Component, OnDestroy, OnInit } from '@angular/core';
import { cardCount } from '../shared/app-data/scrum-points-series';
import { HeartbeatService } from '../shared/services/heartbeat.service';
import { WebsocketService } from '../shared/services/websocket.service';
import { ActivatedRoute } from '@angular/router';
import { UserAction, UserData } from '../shared/model/userAction';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
})
export class RoomComponent implements OnInit, OnDestroy {
  public cardCounts: number[] = cardCount;
  public activeIndex: number = -1;
  public roomId!: any;
  // public activeUsers: Observable<ActiveUser[]> = [];

  // will be removed when api is used
  public usersNameArray = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaryan Guada Nima',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Adain',
    'Adam',
    'Adam-James',
    'Addison',
    'Addisson',
    'Adegbola',
    'Aazaan',
    'Abaan',
    'Adain',
    'Adam',
    'Adam-James',
    'Addison',
    'Addisson',
    'Adegbola',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Adain',
    'Adam',
    'Adam-James',
    'Addison',
    'Addisson',
    'Adegbola',
    'Aazaan',
    'Abaan',
    'Adain',
    'Adam',
    'Adam-James',
    'Addison',
    'Addisson',
    'Adegbola',
  ];

  // wiil be removed when gets data from backend
  public selectedPoints = [1, 2, 3];

  constructor(
    private websocketService: WebsocketService,
    private route: ActivatedRoute,
    private heartBeat: HeartbeatService
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.roomId = params['roomId'];
      this.websocketService.connect(this.roomId);
    });
    this.heartBeat.startHeartbeat();
  }

  public ngOnDestroy(): void {
    this.websocketService.disconnect();
  }

  public toggleActive(index: number): void {
    this.activeIndex = this.activeIndex === index ? -1 : index;
    this.heartBeat.resetHeartbeatTimeout();
  }
}
