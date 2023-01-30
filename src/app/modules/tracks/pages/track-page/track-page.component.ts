import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs'
import * as dataRaw from '../../../../data/tracks.json';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit, OnDestroy {

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) {

  }

  ngOnInit(): void {

   this.loadDataAll();
   this.loadDataRandom();
    // const observer$ = this.trackService.dataTracksTrending$
    //   .subscribe(res => {
    //     this.tracksTrending = res
    //     this.tracksRandom = res
    //     console.log('canciones trending', res);
    //   })
    //   this.listObservers$ = [observer$]
    // const { data }: any = (dataRaw as any).default;
    // this.mockTracksList = data;
    // console.log(data);
  }

  async loadDataAll():Promise<any> {
   this.tracksTrending =  await this.trackService.getAllTracks$().toPromise()
  }

  loadDataRandom():void {   
    this.trackService.getAllRandom$()
    .subscribe(tracks => {
      console.log('canciones 🎶🎶', tracks);
      this.tracksRandom = tracks
      
    }, err => {
      console.log('Esto es un error', err)
    })
  }

  ngOnDestroy(): void {
    // this.listObservers$.forEach(u => u.unsubscribe())
  }
}
