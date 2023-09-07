import { Component } from '@angular/core';
import { ToastService } from '../shared/services/toast.service';
import { Router } from '@angular/router';
import { RoomService } from '../shared/services/room.service';
import { CreateRoomResponse } from '../shared/model/roomId';
import { toastState } from '../shared/services/toast.service';
import {
  MatDialog,
  MatDialogRef,
  MatDialogContainer,
} from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';
import { v4 as uuidv4 } from 'uuid';
import { User, defaultsUser } from '../shared/model/user';
import { StorageService } from '../shared/services/storage.service';
import { CookieService } from 'ngx-cookie-service';
import { seriesNameList } from '../shared/app-data/scrum-points-series';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  public user: User = defaultsUser;
  public isDataStored!: boolean;
  public seriesSelected!: string;
  public cardCount: any = seriesNameList;
  private seriesName!: {};
  public getSeriesName!: string;

  constructor(
    private toast: ToastService,
    private router: Router,
    private roomService: RoomService,
    private cookieService: CookieService,
    public userDialog: MatDialog,
    private storageService: StorageService
  ) {}

  public accessKey(): any {
    for (let key of Object.keys(seriesNameList)) {
      if (
        seriesNameList[key as keyof typeof seriesNameList] === this.seriesName
      ) {
        return key;
      }
    }
  }

  public createRoom(): void {
    if (this.seriesName) {
      const getSeriesName: string = this.accessKey();
      this.roomService.createRoom(getSeriesName).subscribe(
        (response: CreateRoomResponse): void => {
          const roomId: string = response.room_id;
          this.router.navigate([`/room/${roomId}`]);
        },
        (error) => {
          this.toast.showToast('Something went Bad', toastState.danger);
        }
      );
    }
  }

  public openUserDialog(): void {
    const userInCookies = atob(this.cookieService.get('userDetails'));

    if (userInCookies) {
      this.isDataStored = true;
    }

    const userDialogRef: MatDialogRef<UserFormComponent> = this.userDialog.open(
      UserFormComponent,
      {
        data: {
          role: 'SCRUM_MASTER',
          img: '👩‍🏫',
          disable: true,
          displayName: this.isDataStored
            ? JSON.parse(userInCookies).displayName
            : '',
        },
        width: '340px',
        height: '485px',
      }
    );

    userDialogRef.afterClosed().subscribe((response: any): void => {
      if (response) {
        const userDetailsObject = userInCookies
          ? JSON.parse(userInCookies)
          : '';
        if (userDetailsObject?.displayName != response.displayName) {
          this.user.userId = uuidv4();
          this.user.displayName = response.displayName;
          this.storageService.storeUserInCookies(this.user);
        }

        this.storageService.storeJobRole(response.selectedJobRole);
        this.seriesName = response.seriesFormControl;
        this.storageService.userDetails = this.user;
        this.createRoom();
      }
    });
  }
}
