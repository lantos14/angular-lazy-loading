import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchImageService {
  private url: string = 'https://picsum.photos/v2/list?page=1&limit=10';
  constructor(private http: HttpClient) { }

  public getImage() {
    return this.http.get(this.url);
  }
}
