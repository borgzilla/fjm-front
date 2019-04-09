import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseurl = 'http://localhost:5000';
const baseurlJobs = 'http://localhost:5000/v0';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getJobs(): Observable<any> {
    return this.httpClient.get(baseurlJobs + '/jobs');
  }

  getJob(id: string): Observable<any> {
    return this.httpClient.get<any>(baseurlJobs + `/jobs/${id}`);
  }

  getAbout(): Observable<any> {
    return this.httpClient.get(baseurl + '/about');
  }
}
