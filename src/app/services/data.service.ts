import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Datas } from '../components/user/user.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getPost() {
    return this.http.get<Datas[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
