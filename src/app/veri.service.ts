import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VeriService {

  constructor(public http: HttpClient) { }

  public veriCek()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
