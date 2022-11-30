import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public Authservice:AuthService,private router:Router){
    
  }

  checkLogout(){
    return this.Authservice.isLoggedin();

  }
  logout(){
    this.Authservice.removeToken();
    this.router.navigateByUrl('/login');
  }

}
