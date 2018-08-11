import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable()
export class AuthService {

  constructor() { }
  errorMessage = '';

  singupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(promise => console.log(promise))
      .catch(error => this.errorMessage = error['message']);
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then((promise) => {
        console.log(promise);
        alert('You have logged in!');
      })
      .catch(error => this.errorMessage = error['message']);
  }
}
