import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '@modules/history/components/search/search.component';
import { PlayListBodyComponent } from '@shared/components/play-list-body/play-list-body.component';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';

import { HistoyPageComponent } from './histoy-page.component';

describe('HistoyPageComponent', () => {
  let component: HistoyPageComponent;
  let fixture: ComponentFixture<HistoyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [ HistoyPageComponent, SearchComponent, PlayListBodyComponent, OrderListPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
