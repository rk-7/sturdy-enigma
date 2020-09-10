import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LaunchesGalleryComponent } from './launches-gallery/launches-gallery.component';
import { GalleryFilterComponent } from './gallery-filter/gallery-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LaunchesGalleryComponent,
    GalleryFilterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
