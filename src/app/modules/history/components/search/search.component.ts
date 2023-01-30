import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  src: string = ''

  @Output() callBackData: EventEmitter<any> = new EventEmitter();
  constructor() {

  }

  ngOnInit(): void {
    
  }

  callSearch(termino: string) {
    if (termino.length >= 3) {
      this.callBackData.emit(termino)
      console.log(termino);

    }
    
  }

}
