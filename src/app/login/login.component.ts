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
  showEmtyError: boolean = false; 
  showResError: boolean = false; 
  resErrMsg:string = '';
  
  login(): void {
    if (!this.username.trim() || !this.password.trim()) {
      this.showEmtyError = true; 
      return;
    }

    this.showEmtyError = false;
    this.showResError = false;

    
    this.auth.validateLogin(this.username, this.password).subscribe(
      response => {
        if(response.checked){
        console.log('Login successful', response);
        sessionStorage.setItem('access_token', 'true') 
        this.router.navigate(['/home'])  
        }else{
          this.resErrMsg = response.resErrMsg;
          this.showResError = true;
        }
       },
      error => {
        console.error('Login failed', error);
            }
    );
    
  

  }

}
