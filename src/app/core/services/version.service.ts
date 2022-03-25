import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  public version$: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  constructor() {}

  incrementVersion() {
    this.version$.next(this.version$.value + 1);
  }
}
