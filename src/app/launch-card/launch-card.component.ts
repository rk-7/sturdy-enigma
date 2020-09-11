import { Component, OnInit, Input } from '@angular/core';
import { Launch } from '../models/launch-api.model';

@Component({
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.scss']
})
export class LaunchCardComponent implements OnInit {
  @Input() launch: Launch;
  constructor() { }

  ngOnInit(): void {
  }

}
