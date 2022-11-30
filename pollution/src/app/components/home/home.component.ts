import { Component,OnInit } from '@angular/core';
import {UserdataService} from 'src/app/services/userdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  PollutionData:any;
   cval='';
   sval='';
   ctval='';
   userData:any=[]; 
   countrydata:any=[];

   constructor(private userdataService:UserdataService){
    this.userdataService.getCountryData().subscribe(temp=>{
      this.userData=temp;
      this.countrydata= this.userData.data;
      console.log(this.userData.data);
    })
  }
 
   ngOnInit() {
     this.PollutionData = {
       main : {},
       isDay: true
     };
     this.getPollutionData();
     console.log(this.PollutionData);
   }
   getcountry(val:string){
     this.cval=val;
     console.log(this.cval);
   }
   getstate(val:string){
     this.sval=val;
     console.log(this.sval);
   }
   getcity(val:string){
     this.ctval=val;
     console.log(this.ctval);
   }
   getPollutionData(){
     fetch(`http://api.airvisual.com/v2/city?city=${this.ctval}&state=${this.sval}&country=${this.cval}&key=1408169b-1a0d-4e39-a303-6f376b0e1fa2`)
     .then(response=>response.json())
     .then(data=>{this.setPollutionData(data);})
   }
 
   setPollutionData(data: any){
     this.PollutionData = data;
     console.log(data)
     console.log(this.cval);
   }
 
 }
 
