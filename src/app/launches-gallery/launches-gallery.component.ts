import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Launch } from '../models/launch-api.model';
import { LaunchFilter } from '../models/launch-filter';
import { LaunchesService } from '../launches.service';

@Component({
  selector: 'app-launches-gallery',
  templateUrl: './launches-gallery.component.html',
  styleUrls: ['./launches-gallery.component.scss']
})
export class LaunchesGalleryComponent implements OnInit {
  public $launches: Observable<Launch[]>;
  public filter: LaunchFilter = new LaunchFilter();
  constructor(private readonly launchesService: LaunchesService) { }

  ngOnInit(): void {
    this.$launches = this.launchesService.getLaunches(this.filter);

  }

}
