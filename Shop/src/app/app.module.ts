import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselModule } from 'ngx-bootstrap';
import { SliderComponent } from './slider/slider.component';

//import { NgxCarouselModule } from 'ngx-carousel';
//import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent,
    FeedbacksComponent,
    ContactComponent,
    SliderComponent,
    
    
  ],
  imports: [
    BrowserModule, CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
