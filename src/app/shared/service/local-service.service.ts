import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class LocalServiceService {
  
  private apiUrl = 'https://api.slingacademy.com/public/sample-photos/1.jpeg';

  constructor(private http: HttpClient) { }

  getImage(): Observable<Blob> {
    return this.http.get(this.apiUrl, { responseType: 'blob' });
  }
}
