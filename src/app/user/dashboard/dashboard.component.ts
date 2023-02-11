import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{


  auth: any;
  constructor(private router: Router) {  }


  ngOnInit(): void {

    this.auth = localStorage.getItem('token');
    console.log(this.auth);

    if (!this.auth) {

      this.router.navigate(['/user/login']);
    }

    if (this.auth=='undefined') {

      this.router.navigate(['/user/login']);
    }

  }


}
