import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Launch } from '../models/launch-api.model';
import { LaunchFilter } from '../models/launch-filter';
import { LaunchesService } from '../launches.service';
import { initialLaunchYear } from '../constants';


@Component({
  selector: 'app-launches-gallery',
  templateUrl: './launches-gallery.component.html',
  styleUrls: ['./launches-gallery.component.scss']
})
export class LaunchesGalleryComponent implements OnInit {
  public $launches: Observable<Launch[]>;
  public filter: LaunchFilter;
  public get filters(): LaunchFilter {
    return this.filter;
  }
  public set filters(value: LaunchFilter) {
    if (value && this.filter !== value) {
     this.filter = value;
     this.filterChanged();
    }
  }
  public get initialLaunchYear(): number {
    return initialLaunchYear;
  }
  constructor(private readonly launchesService: LaunchesService) { }

  ngOnInit(): void {
    this.filters = new LaunchFilter();
  }
  filtersUpdated(filter: LaunchFilter): void {
    this.filters = filter;
  }
  filterChanged(): void {
    this.$launches = this.launchesService.getLaunches(this.filter);
  }

}
