import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(private http: HttpClient) { }

  public getApps(): Observable<any> {
    return this.http.get('https://www.lympestudio.com/getApps.php');
  }

  public getAppById(id: number): Observable<any> {
    return this.http.get('https://www.lympestudio.com/getAppById.php?id=' + id);
  }
}
