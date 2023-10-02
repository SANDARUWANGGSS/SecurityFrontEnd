import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private userService:UserService)
  {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login(loginForm:NgForm)
  {
    console.log("Form is submitted");
    console.log(loginForm.value);
    this.userService.login(loginForm.value).subscribe(
      (response)=>{
        console.log(response);
      },
      (error=>{
        console.log(error)
      })
    )
  }
}
