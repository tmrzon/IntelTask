import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  dispatcherApi: Subject<any> = new Subject();
  getAllApis(): Observable<any> {
    return this.httpClient.get<any>('https://api.publicapis.org/entries');
  }

}
