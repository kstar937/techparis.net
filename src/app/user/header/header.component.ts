import { Component,OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  users:any;
  loginbtn:boolean;
  logoutbtn:boolean;
  auth: any;

  constructor(private dataService: ApiService,private router:Router) {



    dataService.getLoggedInName.subscribe(name => this.changeName(name));
  
  
    if (this.dataService.isLoggedIn()) {
     // console.log("isLoggedIn")
      this.loginbtn=false;
      this.logoutbtn=true;
    }
    else{
      this.loginbtn=true;
      this.logoutbtn=false;  
    }
  
  }

  ngOnInit(): void {

    this.auth = localStorage.getItem('token');
    console.log(this.auth);

    if (!this.auth) {
      this.loginbtn=true;
      this.logoutbtn=false;
    }

    if (this.auth=='undefined') {

    }

  }




  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn != name;
  }
  logout() {
    this.dataService.deleteToken();
    window.location.href = window.location.href;
  }

}
