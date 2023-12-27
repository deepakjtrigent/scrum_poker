import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { devTeam } from '../shared/app-data/dev-team-info';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent {
  public ChoosenEmpName: string = this.data.choosenEmpName ;
  public ChoosenEmpDetails: any = devTeam;

  constructor(
    public dialogRef: MatDialogRef<EmployeeInfoComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      choosenEmpName: string;
    }
  ) { }

  public closeCard(){
    this.dialogRef.close()
  }
}
