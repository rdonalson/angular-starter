import { HttpHeaders, HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private http = inject(HttpClient);

  getItems(url: string): Observable<object> {
    return this.http.get(url, httpOptions);
  }

}
