import { Component, OnInit } from '@angular/core';
import { faEdit, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-edit',
  templateUrl: './icon-edit.component.html',
  styleUrls: ['./icon-edit.component.scss'],
})
export class IconEditComponent implements OnInit {
  myIcon: IconDefinition = faEdit;

  constructor() {}

  ngOnInit(): void {}
}
