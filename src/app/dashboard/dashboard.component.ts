import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{


  setuserDatapass: any;
  setuserDataemail:any;
  userDetails:any;
  auth: any;
  constructor(private router: Router, private dataService: ApiService) {  }


  ngOnInit(): void {

    this.auth = localStorage.getItem('token');
   // console.log(this.auth);

    if (!this.auth) {

      this.router.navigate(['/login']);
    }

    if (this.auth=='undefined') {

      this.router.navigate(['/login']);
    }
 

    this.setuserDataemail = localStorage.getItem('setuserDataemail');
    this.setuserDatapass = localStorage.getItem('setuserDatapass');
  }
  logout() {
    this.dataService.deleteToken();
    this.dataService.deleteuserDataemail();
    this.dataService.deleteuserDatapass();
    window.location.href = window.location.href;
  }

}
