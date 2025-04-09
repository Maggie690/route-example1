import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  readonly API_URL = '/api';

  constructor(private http: HttpClient) {}

  getContacts() :Observable<any>{
    return this.http.get(this.API_URL + '/contacts');
  }

  getContact(contactId: string):Observable<any>{
    return this.http.get(`${this.API_URL + '/contacts'}/${contactId}`);
  }
}
