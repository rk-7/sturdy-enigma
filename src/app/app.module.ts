import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LaunchesGalleryComponent } from './launches-gallery/launches-gallery.component';
import { GalleryFilterComponent } from './gallery-filter/gallery-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { SuccessfulPipe } from './pipes/successful.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { LaunchCardComponent } from './launch-card/launch-card.component';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LaunchesGalleryComponent,
    GalleryFilterComponent,
    SuccessfulPipe,
    LaunchCardComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
