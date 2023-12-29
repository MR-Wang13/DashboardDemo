import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private host = "http://localhost:5000";
 
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
