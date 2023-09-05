import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { jobRole } from '../shared/app-data/emoji-data';
import { Router } from '@angular/router';
import { seriesNameList } from '../shared/app-data/scrum-points-series';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  public emojiData = Object.keys(jobRole);
  public selectedValue!: string;
  public seriesCount = Object.values(seriesNameList)

  public userFormGroup = new FormGroup({
    displayName: new FormControl('' , [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
    selectedJobRole: new FormControl(
      '',
      [Validators.required]
    ),
    seriesFormControl:new FormControl({ value: '', hidden: this.data.hideSeries }, 
    [Validators.required])
  });

  constructor(
    public dialogRef: MatDialogRef<UserFormComponent>,
    private router : Router,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      role: string;
      img: string | any;
      disable: boolean;
      displayName: string;
      hideSeries?:boolean
    }
  ) {}

  ngOnInit() {
  
    if (this.data && this.data.role == 'SCRUM_MASTER') {
      this.selectedJobRole.setValue(this.data.role);
    }

    if (this.data.displayName != '') {
      this.displayName.setValue(this.data.displayName);
    }
  }

  get displayName() {
    return this.userFormGroup.get('displayName') as FormControl;
  }
  get selectedJobRole() {
    return this.userFormGroup.get('selectedJobRole') as FormControl;
  }
  get seriesFormControl() {
    return this.userFormGroup.get('seriesFormControl') as FormControl;
  }

  public getErrorMessage(): string | void {
    if (
      this.displayName.hasError('required') ||
      this.displayName.hasError('minlength')
    )
      return 'Name should have atleast 2 characters';

    if (this.displayName.hasError('maxlength'))
      return 'Your name should not be greater than 15 characters';
  }

  public getSelectedJobRoleErrorMessage(): string | void {
    if (this.selectedJobRole.hasError('required')) {
      return 'It is Required to Choose your job role';
    }
  }

  public getSelectedSeriesError(): string | void {
    if (this.seriesFormControl.hasError('required')) {
      return 'It is Required to Choose your series type';
    }
  }
  
  public getSampleValue(key: string): string | undefined {
    return (jobRole as { [key: string]: string })[key];
  }
  

  public onRoleSelected(): void {
    this.selectedValue = this.selectedJobRole.value;
    for (let roles of this.emojiData) {
      if (roles === this.selectedValue) {
        this.data.role = roles
        this.data.img = this.getSampleValue(roles)
      }
    }
  }
}
