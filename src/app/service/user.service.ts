import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = "http://localhost:8081"
  constructor(private httpClient:HttpClient) { }

  public login(loginData:any)
  {
    return this.httpClient.post(this.BASE_URL+"/authentication",loginData)
  }
}
