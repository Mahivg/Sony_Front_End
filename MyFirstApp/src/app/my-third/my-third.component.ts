import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'sony-my-third',
  templateUrl: './my-third.component.html',
  styles: [`
      p {
      color: blue;
      font-size: 14px;
    }
  `]
})
export class MyThirdComponent implements OnInit {

  // @ViewChild('userTdForm')
  // userForm: NgForm;

  userFormGroup: FormGroup;

  myEmail: string = "m@gmail.com";

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.userFormGroup = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.minLength(6)]),
      cPassword: new FormControl(null, [Validators.minLength(6), this.checkPassWord.bind(this) ]),
      dob: new FormControl(),
      email: new FormControl(null, [Validators.email]),
      address: new FormGroup({
        line1: new FormControl(),
        line2: new FormControl()
      })
    });

    this.userFormGroup.get('userName').valueChanges.subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

  checkPassWord(control: AbstractControl): {[key: string]: any} | null  {
    if(this.userFormGroup) {
      const passwordValue = this.userFormGroup.get('password').value;
      const cPasswordValue = this.userFormGroup.get('cPassword').value;

      if(passwordValue && cPasswordValue) {
        if(passwordValue == cPasswordValue) {
          return null;
        }
      }
      return { passwordMismatch : true };
    }
  }


  addUser() {
    console.log(this.userFormGroup);
    console.log(this.userFormGroup.value);
  }

  setValue() {
    this.userFormGroup.setValue({
      userName: 'Mounika',
      password: 'Test',
      cPassword: 'Test',
      email: 'Mounika@gmail.com',
      dob: '1995-10-27',
      address: {
        line1: 'test',
        line2: 'Test'
      }
    });
  }

  setPatchValue() {
    this.userFormGroup.patchValue({
      userName: 'Mounika',
      email: 'Mounika@gmail.com'
    });
  }

  resetValue() {
    this.userFormGroup.reset();
  }

}
