import { Component,OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Web';
  loginbtn:any;
  logoutbtn:any;
  auth: any;

  constructor(private dataService: ApiService,private router:Router) {


  
    this.auth = localStorage.getItem('token');
   // console.log(this.auth);

    if (!this.auth) {
      this.loginbtn=true;
      this.logoutbtn=false;
    } else{
      this.loginbtn=false;
      this.logoutbtn=true;
    }

    if (this.auth=='undefined') {
      this.loginbtn=true;
      this.logoutbtn=false;
    }
  
  }

  ngOnInit(): void {
  

  }

  logout() {
    this.dataService.deleteToken();
    window.location.href = window.location.href;
  }
}

