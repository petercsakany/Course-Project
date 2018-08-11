import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  error = '';
  ngOnInit() {
  }

  onSignup(form: NgForm) {
    this.authService.singupUser(form.value.email,form.value.password);
    this.error= this.authService.errorMessage;
  }

}
