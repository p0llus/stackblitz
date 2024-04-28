import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { DescriptionComponent } from './description/description.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { DocTitleComponent } from './doc-title/doc-title.component';
import { DocItemComponent } from './doc-item/doc-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    DescriptionComponent,
    SectionTitleComponent,
    VideoCardComponent,
    DocTitleComponent,
    DocItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
