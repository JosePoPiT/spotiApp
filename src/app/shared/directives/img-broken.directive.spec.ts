import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ImgBrokenDirective } from './img-broken.directive';

//TODO Debes de tener un componente de prueba
@Component({
  template: '<img class="testing-directive"appImgBroken [src]="srcMock">'
})

class TestComponent {
  public srcMock: any = null
}

//TODO La prueba es la siguiente

describe('ImgBrokenDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[
        TestComponent,
        ImgBrokenDirective
      ]
    })

    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
    fixture.detectChanges();
  })

  it('should create an instance', () => {
    const mockElement = new ElementRef('')
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('😂😍😍 Test component deberia instarciarse correctamente', () => {
    expect(component).toBeTruthy()
  })
  it('😂😍😍 Directiva deberia de cambiar la imagen cuando no encuentra', (done: DoneFn) => {
    //TODO Arrange
    const imgBefore = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
    const beforeImgSrc = imgBefore.src //TODO Tenemos la url antes de ser cambiada por la directiva

    component.srcMock = undefined
    
    setTimeout(() => {
      const imgAfter = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
      const afterImgSrc = imgAfter.src //TODO Tenemos la url despues de ser cambiada por la directiva

      expect(afterImgSrc).toMatch(/\bimage\b/)//TODO: expresion regular
      done();
    }, 3000);

  })
});
