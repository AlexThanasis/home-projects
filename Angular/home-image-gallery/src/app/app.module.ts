import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroImageGalleryComponent } from './hero-image-gallery/hero-image-gallery.component';
import { HeroImageThumbnailComponent } from './hero-image-thumbnail/hero-image-thumbnail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroImageGalleryComponent,
    HeroImageThumbnailComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
