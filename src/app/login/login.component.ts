import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(public router: Router,
    private auth:AuthService) { }

  ngOnInit(): void {
  }

  username: string = ''
  password: string = ''
  showSpinner:any 
  login(): void {
    this.auth.validateLogin(this.username, this.password).subscribe(
      response => {
        console.log('Login successful', response);
        sessionStorage.setItem('access_token', 'true') 
        this.router.navigate(['/home'])  
       },
      error => {
        console.error('Login failed', error);
        alert("Login failed");
            }
    );
    
  

  }

}
