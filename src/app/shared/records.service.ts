import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './interfaces';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  constructor(private http: HttpClient) { }

  setRecord(user: User): Observable<any> {

    return this.http.post(`${environment.rbDbUrl}`, user);
  }
  getRecord(): any {
    return this.http.get<User>(`${environment.rbDbUrl}`)
  }
}
