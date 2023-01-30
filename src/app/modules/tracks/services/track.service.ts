import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { environment } from 'src/app/environments/environment';
import * as dataRaw from '../../../data/tracks.json';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  // dataTracksTrending$: Observable<TrackModel[]> = of([]);
  // dataTracksRandom$: Observable<TrackModel[]> = of([]);

  private readonly URL = environment.api
  constructor(private httpClient: HttpClient) {
    // const { data }: any = (dataRaw as any).default;
    // this.dataTracksTrending$ = of(data);

    // this.dataTracksRandom$ = new Observable((observer) => {
    //   observer.next()
    // })
   }

   getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        map((tracksRaw: any) => {
          return tracksRaw.data;
        })
      )
   }
   getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        map(({ data }: any) => {
          return data.reverse();
        }),
        catchError((err) => {
          const { status, statusText } = err;
          console.log('Algo paso revisame 📬📬', [status, statusText]);
          
          return of([])
        })
      )
   }
}
