import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BbvaService {
  http: HttpClient;
  results: any;
  constructor(http: HttpClient) {
    this.http = http;
  }

  getBBVA(YOURREDIRECTURI: string) {
    this.http.get(`https://connect.bbva.com/token/authorize?
    client_id=app.bbva.equipo1
    &response_type=code&
    redirect_uri=${YOURREDIRECTURI}`, {
        headers: new HttpHeaders()
          .set('Authorization', `l7J0la@@f5zVLiTIOlFQVzNjlupcLaySq18yn9J7Ta7Wz8uoZkdN9WnnApQ9tcsO`)
          .set('Content-Type', 'application/json')
      }).subscribe(data => {
        // data is now an instance of type ItemsResponse, so you can do this:
        this.results = data;
      });
  }
  getFullInfo(token: string) {
 this.http.get('https://apis.bbva.com/customers-sbx/v1/me-full', {
      headers: new HttpHeaders()
        .set('Authorization', `jwt ${token}`)
        .set('Content-Type', 'application/json')
    }).subscribe(data => {
      // data is now an instance of type ItemsResponse, so you can do this:
      return this.results = data;
    });
  }

  postBBVA(YOURCODE: string, YOURREDIRECTURI: string, YOURAPPCREDENTIALS: any, body: any) {
    this.http.post(`https://connect.bbva.com/token?grant_type=authorization_code&
    code=${YOURCODE}&
    redirect_uri=${YOURREDIRECTURI}`, body, {
        headers: new HttpHeaders().set('Authorization', `l7J0la@@f5zVLiTIOlFQVzNjlupcLaySq18yn9J7Ta7Wz8uoZkdN9WnnApQ9tcsO
      `).set('Content-Type', 'application/json'),
      }).subscribe(data => {
        // data is now an instance of type ItemsResponse, so you can do this:
        this.results = data;
      });
  }


}
