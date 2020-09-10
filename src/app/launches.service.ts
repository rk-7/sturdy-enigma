import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LaunchFilter } from './models/launch-filter';
import { Launch } from './models/launch-api.model';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {

  constructor(private readonly httpClient: HttpClient) { }
  getLaunches(filters: LaunchFilter)
  : Observable<Launch[]> {
    let params = new HttpParams();

    for (const key in filters) {
      if (Object.prototype.hasOwnProperty.call(filters, key)) {
        params = params.set( key, filters[key]);
      }
    }
    return this.httpClient.get<Launch[]>(`${environment.apiBase}/launches`, { params });
  }
}
