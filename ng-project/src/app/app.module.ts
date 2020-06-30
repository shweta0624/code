import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Module: Gorup of logic

import { FirstComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { BannerFooterComponent } from './layouts/banner-footer/banner-footer.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { ProductsComponent } from './layouts/products/products.component';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
  declarations: [FirstComponent, NavComponent, BannerOneComponent, BannerTwoComponent, BannerThreeComponent, BannerFooterComponent, ContactUsComponent, ProductsComponent, FooterComponent], //component : view
  imports: [BrowserModule], // Module : logic
  bootstrap: [FirstComponent], // root comp
})
export class FirstModule {}
