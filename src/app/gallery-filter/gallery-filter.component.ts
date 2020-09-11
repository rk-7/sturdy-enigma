import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LaunchFilter } from '../models/launch-filter';
import { range } from '../utils/range';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery-filter',
  templateUrl: './gallery-filter.component.html',
  styleUrls: ['./gallery-filter.component.scss']
})
export class GalleryFilterComponent implements OnInit, OnDestroy {
  @Input() initialLaunchYear: number;
  @Output() filtersUpdated = new EventEmitter<LaunchFilter>();
  public years: number[];
  public filtersForm = new FormGroup({
    limit: new FormControl(undefined),
    launch_success: new FormControl(undefined),
    land_success: new FormControl(undefined),
    launch_year: new FormControl(undefined)
  });
  private subscriptions: Subscription;
  constructor() { }
  ngOnDestroy(): void {
    if (this.subscriptions){
      this.subscriptions.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.years = range(this.initialLaunchYear, new Date().getFullYear());
    this.filtersForm.valueChanges
    .subscribe(value => this.filtersUpdated.emit(this.getNonEmptyValues(value)));
  }
  private getNonEmptyValues(value: LaunchFilter): LaunchFilter {
    console.log(value);
    return Object.entries(value).filter(kv => !(kv[1] === null || kv[1] === undefined || kv[1] === ''))
    .reduce((accum, [k, v]) => {
      accum[k] = v;
      return accum;
    }, new LaunchFilter());
  }
}
