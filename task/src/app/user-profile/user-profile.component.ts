import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MediaObserver,MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() isDeviceXs:boolean | undefined;

 userDetails ={
    Name:'Mary,Jason & Hodge of Attorney',
    Domain:'www.mjhattorenys.com',
    Gender:'Male',
    Dob:'8th June 1979',
    PhoneNumber:+8654321234,
    Location:'12 street, Silicon Valley, Avenue NE,Huntsvile'
    }

   editUserDetailsForm = new FormGroup({
    Name:new FormControl(''),
    Domain:new FormControl(''),
    Gender:new FormControl(''),
    Dob:new FormControl(''),
    PhoneNumber:new FormControl(),
    Location:new FormControl('')
   })

   dialogRef: MatDialogRef<any> | undefined ;
   activeMediaQuery = '';


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {


  }

  openDialog(editProfileDialog:any) {

   this.editUserDetailsForm.patchValue(this.userDetails)


    this.dialogRef = this.dialog.open(editProfileDialog, {
      height: '80%',
      width: '60%'
  });
  }


  editDetails(){
      const Data = {
        ...this.editUserDetailsForm.value
      }



      // this.userDetails.Name =  this.editUserDetailsForm.controls['Name'].value
  }


}
