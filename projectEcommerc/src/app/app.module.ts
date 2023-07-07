import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/Layout/header/header.component';
import { FooterComponent } from './component/Layout/footer/footer.component';
import { ContentComponent } from './component/Layout/content/content.component';
import { AllProductsComponent } from './component/Layout/content/all-products/all-products.component';
import { HttpClientModule} from '@angular/common/http'
import { AllProductsService } from './component/Layout/content/sreves/all-products.service';
import { CarouselComponent } from './component/Layout/content/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    AllProductsComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [AllProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
