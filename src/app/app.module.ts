import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { HomePageComponent } from './common/home-page/home-page.component';
import { FinalPageComponent } from './common/final-page/final-page.component';
import { ShopPageComponent } from './common/shop-page/shop-page.component';
import { ImageDisplayComponent } from './common/image-display/image-display.component';
import { ImageTextDisplayComponent } from './common/image-text-display/image-text-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FinalPageComponent,
    ShopPageComponent,
    ImageDisplayComponent,
    ImageTextDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
