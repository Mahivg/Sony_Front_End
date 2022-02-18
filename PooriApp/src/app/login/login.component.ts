import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'sony-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('txtUserName')
  txtUserName: ElementRef;

  @ViewChild('txtPassword')
  txtPassword: ElementRef;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {

    const userName = this.txtUserName.nativeElement.value;
    const password = this.txtPassword.nativeElement.value;

    const isLogin = this.authService.validateUser(userName, password);

    this.authService.setUserLoggedIn(isLogin);
    if(isLogin) {
        this.router.navigate(['/menu-list']);
    }

  }

}
