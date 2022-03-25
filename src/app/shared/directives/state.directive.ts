import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]',
})
export class StateDirective implements OnChanges {
  @Input() appState!: string;
  @HostBinding('class') class!: string;

  constructor() {}

  ngOnChanges(): void {
    this.class = 'state-' + this.appState.toLowerCase();
  }
}
