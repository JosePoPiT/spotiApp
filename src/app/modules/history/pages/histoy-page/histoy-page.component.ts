import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-histoy-page',
  templateUrl: './histoy-page.component.html',
  styleUrls: ['./histoy-page.component.css']
})
export class HistoyPageComponent implements OnInit {
  listResults$: Observable<any> = of([]);

  constructor(private searchService: SearchService) {

  }

  ngOnInit(): void {
    
  }

  receiveData(event: string): void {
    console.log('Estoy en el padre xD', event);
    this.listResults$ = this.searchService.searchTracks$(event)
      
    
  }
}
