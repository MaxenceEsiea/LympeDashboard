import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  public api_url = 'https://api.lympestudio.com';

  constructor(private http: HttpClient) { }

  public getApps(): Observable<any> {
    return this.http.get(this.api_url + '/apps');
  }

  public getAppById(id: number): Observable<any> {
    return this.http.get(this.api_url + '/apps/find/' + id);
  }

  public getReviewsByAppId(id: number): Observable<any> {
    return this.http.get(this.api_url + '/apps/reviews/' + id);
  }

  public getDownloadsByAppId(id: number): Observable<any> {
    return this.http.get(this.api_url + '/apps/downloads/' + id);
  }

  public getSummary(): Observable<any> {
    return this.http.get(this.api_url + '/apps/summary');
  }

  public getSummaryByAppId(id: number): Observable<any> {
    return this.http.get(this.api_url + '/apps/summary/' + id);
  }

  public getDownloads(): Observable<any> {
    return this.http.get(this.api_url + '/apps/downloads');
  }

  public getProgressData(): Observable<any> {
    return this.http.get(this.api_url + '/apps/progress');
  }
}
