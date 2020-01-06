import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = '/api/login';
   }
}
