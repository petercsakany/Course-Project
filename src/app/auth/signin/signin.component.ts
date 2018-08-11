import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) {}

  error = '';
  ngOnInit() {
  }

  onSignin(form: NgForm) {
    this.authService.signinUser(form.value.email, form.value.password);
    this.error = this.authService.errorMessage;
  }

}
