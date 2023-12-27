import { Component } from '@angular/core';
import { devTeam } from '../shared/app-data/dev-team-info';
import { EmployeeInfoComponent } from '../employee-info/employee-info.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tech-team-intro',
  templateUrl: './tech-team-intro.component.html',
  styleUrls: ['./tech-team-intro.component.css'],
})
export class TechTeamIntroComponent
 {
  constructor(
    public userDialog: MatDialog,
  ){

  }
  public devTeamData=devTeam;

  public openEmployeeDetailsDialog(empName:string):void {
    console.log(empName)
    const userInfoDialogRefo:MatDialogRef<EmployeeInfoComponent> = this.userDialog.open(EmployeeInfoComponent,
    {
      data:{
        choosenEmpName :empName
      },
      width:'600px',
      height:'370px',
    }
    );
  }
}
