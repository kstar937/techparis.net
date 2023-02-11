import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  angForm: FormGroup;
  constructor(private fb: FormBuilder,
              private dataservice:ApiService,
              private router:Router,
              
              ) {
                this.angForm = this.fb.group({
                  f_name: [''],
                  l_name: [''],
                  email: [''],
                  password: [''],
                  mobile: [''],
                })
              }


  ngOnInit(): void {
  }


  postdata(angForm: any) {
    this.dataservice.userregisstration(
      angForm.value.f_name,
      angForm.value.l_name,
      angForm.value.email,
      angForm.value.password,
      angForm.value.mobile,
    )
    .pipe(first())
    .subscribe( data => {
       // console.log(data);
        if (data.message == 'success',
        data.email == null,
        data.f_name ==null,
        data.l_name == null,
        data.mobile ==  null,
        data.password ==null) {
      this.router.navigate(['/login']);
      Swal.fire('Register Done you will redirect to login');

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
