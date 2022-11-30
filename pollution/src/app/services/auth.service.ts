import { HttpClient } from '@angular/common/http';
import { TemplateBindingParseResult } from '@angular/compiler';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient) { }


  baseServerUrl ="http://localhost:5000/api/";

  registerUser(user: Array<any>){
    return this.http.post(this.baseServerUrl + 'User/CreateUser',{
      name: user[0],
      userName: user[1],
      email: user[2],
      password: user[3]
    } ,{responseType: 'text',});
  }

  loginUser(loginInfo: Array<any>){
    return this.http.post(this.baseServerUrl + 'User/LoginUser',{
      email: loginInfo[0],
      password: loginInfo[1]
    } ,{responseType: 'text',});
  }

  isLoggedin():boolean{
    return localStorage.getItem("token")? true:false;
  }

  removeToken(){
    localStorage.removeItem("token");
  }




  }

