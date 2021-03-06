import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public get title(): string {
    return environment.appTitle;
  }
  public get developer(): string {
    return environment.appDeveloper;
  }
}
