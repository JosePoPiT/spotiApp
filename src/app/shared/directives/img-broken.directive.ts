import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImage: string | boolean = false
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    console.log('Esta imagen reventó 😡', this.elHost);
    elNative.src = '../../../assets/image-not-found-icon.png'

    if (this.customImage) {
        elNative.src = this.customImage
    }else {
      elNative.src = '/assets/image-not-found-icon.png'
    }
    
  }

  constructor(private elHost: ElementRef) { 
    console.log(this.elHost);
    
  }

}
