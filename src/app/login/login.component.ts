import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  angForm:FormGroup

  constructor(private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router) {

      this.angForm = this.fb.group({
        email: [''],
        password: [''],
      })
    }
    
    ngOnInit(): void {
    
    }

    postdata(angForm: any) {
      this.dataService.userlogin(angForm.value.email,angForm.value.password)
      .pipe(first()).subscribe(
        data => {
          //console.log(data);
          if (data.message == 'success') {
        this.router.navigate(['/dashboard']);
        Swal.fire('Bienvenue / Welcome');

      }
      else{
        alert("User name or password is incorrect");
      }
       },
        error => {
          alert("User name or password is incorrect");
        });
    }








}
