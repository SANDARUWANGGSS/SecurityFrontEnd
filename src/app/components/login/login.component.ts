import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor()
  {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login(loginForm:NgForm)
  {
    console.log("Form is submitted");
    console.log(loginForm.value);
  }
}
