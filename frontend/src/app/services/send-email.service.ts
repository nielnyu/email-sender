import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  //server url
  url = 'http://localhost:3000'


  constructor(private http: HttpClient) { }

  // POST request to API
  addUser(email: string){
    return this.http.post(this.url, email)

  }
  

}
