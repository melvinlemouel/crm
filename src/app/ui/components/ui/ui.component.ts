import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  isClosed: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.isClosed = !this.isClosed
  }
}
