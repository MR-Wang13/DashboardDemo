import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Record } from '../home/home.component';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  private host = "http://my-springboot-env.eba-bkzikp3p.us-east-1.elasticbeanstalk.com";
 
  private getDashBoardRecordUrl = this.host + "/api/attacks/getDashboardList"

  private getdetailUrl = this.host + "/api/attacks/participant/"

  private getDashboardChartUrl = this.host +"/api/attacks/getDashboardChartData"


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'
    })
      };

  constructor(private http:HttpClient) { }


  getRecordList(): Observable<Record[]> {
      return this.http.get<Record[]>(this.getDashBoardRecordUrl);
  }

  getRecordDetail(id:any): Observable<any> {
    return this.http.get(this.getdetailUrl+id);
  }

  getDashboardChartData(): Observable<any> {
    return this.http.get(this.getDashboardChartUrl);
  }

}
