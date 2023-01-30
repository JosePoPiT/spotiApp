import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  searchTracks$(terms: string):Observable<any> {
    console.log(terms);
    
    return this.http.get(`${this.URL}/tracks?src=${terms}`)
      .pipe(
        map((dataRaw: any) => dataRaw.data )
      )
  }
}
