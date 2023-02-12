import { EventEmitter, Injectable, Output } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  redirectUrl !: string;
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClient,) { }

  public userregisstration(f_name: any,l_name:any,email:any,password:any,mobile:any,) 
                          {
    const url = environment.API_EndPoint + 'user_loginregister/register.php';
    return this.httpClient.post<any>(url,
    {
      f_name,l_name,email,password,mobile}
    )
    .pipe(map(Users => {
      this.getLoggedInName.emit(true);
      return Users;
    }));

  }

  public userlogin(email:any,password:any) {
    const url = environment.API_EndPoint + 'user_loginregister/login.php';
    return this.httpClient.post<any>(url, {email, password})
    .pipe(map(Users => {
    // console.log('userData',Users)
      this.setToken(Users.email);
      this.setuserDataemail(Users.email);
      this.setuserDatapass(Users.password);
      this.getLoggedInName.emit(true);
     return Users;
    }));
  }


  setuserDatapass(setuserDatapass: string) {
    localStorage.setItem('setuserDatapass', setuserDatapass);
  }

  setuserDataemail(setuserDataemail: string) {
    localStorage.setItem('setuserDataemail', setuserDataemail);
  }


  deleteuserDatapass() {
    localStorage.removeItem('setuserDatapass');
  }

  deleteuserDataemail() {
    localStorage.removeItem('setuserDataemail');
  }





  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken!= null) {
      return true
    }
    return false;
  }

}
