import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  version$: BehaviorSubject<number>;

  constructor(private versionService: VersionService) {
    this.version$ = this.versionService.version$;
  }

  ngOnInit(): void {}
}
