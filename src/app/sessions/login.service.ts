import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable()
export class LoginService {
  topicURL = environment.url;
  constructor(private http: HttpClient) { }
 
  ll(data): Observable<any> {
    console.log(data);
    alert("ggg");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.topicURL + '/api/v1/auth/login', data, httpOptions);
}

}
