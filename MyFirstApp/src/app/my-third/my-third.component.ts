import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Post } from '../models/Post';
import { DbService } from '../services/db.service';
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

  constructor(private storageService: StorageService, private httpClient: HttpClient, private dbService: DbService) { }

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
      const cPasswordValue = control.value;

      const numRegex = '^[0-9]*$';
      numRegex.match(cPasswordValue);

      if(passwordValue && cPasswordValue) {
        if(passwordValue == cPasswordValue) {
          return null;
        }
      }
      return { passwordMismatch : true };
    }
  }


  callFakeAPIGEt() {
    console.log('Before api get call');
    this.dbService.getPosts().subscribe(data => {
      console.log(data);
      console.log(data[0]);
      // this.callPostById(10);
    }, err => {}, () => {});
    console.log('After api get call');


  }

  callPostById(postId: number) {

   this.dbService.getPostById(1).subscribe(data => {
        console.log(data);
      }, err => {}, () => {});
  }

  callFakeAPIPost() {

    const post = {
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      userId: 1
    }
    this.dbService.AddPost(post).subscribe(data => {
      console.log(data);
    }, err => {}, () => {});
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
