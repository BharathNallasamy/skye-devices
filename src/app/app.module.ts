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
import { ImageDispay2Component } from './common/image-dispay2/image-dispay2.component';
import { ImageTextDispay2Component } from './common/image-text-dispay2/image-text-dispay2.component';
import { ProductSpecModalComponent } from './common/product-spec-modal/product-spec-modal.component';
import { AboutUsModalComponent } from './common/about-us-modal/about-us-modal.component';
import { PreOrderingModalComponent } from './common/pre-ordering-modal/pre-ordering-modal.component';
import { FooterModalComponent } from './common/footer-modal/footer-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FinalPageComponent,
    ShopPageComponent,
    ImageDisplayComponent,
    ImageTextDisplayComponent,
    ImageDispay2Component,
    ImageTextDispay2Component,
    ProductSpecModalComponent,
    AboutUsModalComponent,
    PreOrderingModalComponent,
    FooterModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
