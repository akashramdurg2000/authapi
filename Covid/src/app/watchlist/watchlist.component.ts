import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router){

  }

  ngOnInit(): void {
    
  }

 /*  logout(){
    this.authService.removeToken();
    this.router.navigateByUrl('/home')
  } */
}
