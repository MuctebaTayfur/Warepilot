import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, finalize, map, tap, throwError } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ])

  });
  constructor(private client: HttpClient, private fb: FormBuilder,private router:Router,private socialAuthService: SocialAuthService) {
    this.socialAuthService.authState.subscribe((user: SocialUser) => {
      console.log(user);
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      client.post<any>("https://localhost:44305/auth/GoogleLogin", user, {headers})
      .subscribe(response => {
        console.log(response);
        const jwtToken = response.data.access_token;
        console.log(jwtToken)
        localStorage.setItem("access_token", jwtToken);
      });
    });
  }

  ngOnInit(): void {
  }
  loginWithGoogle(){

  }
  login(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const userNameControl = this.myForm.get('userName');
    const passwordControl = this.myForm.get('password');
    var log = {
      "username": userNameControl!.value,
      "password": passwordControl!.value,
    }
    const token:string="";

    var result= this.client.post<any>("https://localhost:44305/auth/Login", log, { headers }).pipe(
      map((_) => {
        if (_) {

          console.log(_.access_token)
          localStorage.setItem('ut', _.access_token);
          return true;
        }
        return false;
      }),catchError(this.handleError),
      finalize(()=>{})  
      ).subscribe((res)=>{
        if(res){
          this.router.navigate([('home')])
        }

      });
    
      localStorage.setItem("token","result.")

      console.log(result);

  }
  private handleError(err: HttpErrorResponse) {
    let errMessage = '';

    if (err.error instanceof ErrorEvent) {
      errMessage = `an error ocured ${err.error.message}`;
    }
    else {
      errMessage = `server returned code :${err.status}, error message is: ${err.message}`;
    }
    console.log(errMessage);

    return throwError(() => errMessage);


  }
}
