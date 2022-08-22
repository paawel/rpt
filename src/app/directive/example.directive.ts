import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective {
  @HostBinding('style.color') color= 'red';

  constructor() { }

  changeColor(v: string) {
    this.color = v;
  }

}
