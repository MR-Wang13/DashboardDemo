import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //http://my-springboot-env.eba-bkzikp3p.us-east-1.elasticbeanstalk.com
  private host = "http://my-springboot-env.eba-bkzikp3p.us-east-1.elasticbeanstalk.com";
 
  private checkAuthUrl = this.host + "/api/clinicians/validateLogin"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'
    })
      };

  constructor(private http:HttpClient) { }

  validateLogin(username: string, password: string): Observable<any> {
        return  this.http.post(this.checkAuthUrl,null,{
      params: {
        username: username,
        password: password
      }
    });

  }
}
