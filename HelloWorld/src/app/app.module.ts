import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { Hello1Component } from './components/hello1/hello1.component';
import { NgForObjectComponent } from './components/ng-for-object/ng-for-object.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import { BodyComponent } from './components/body/body.component';
import { IndexComponent } from './components/index/index.component';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { BannerComponent } from './components/body/banner/banner.component';
import { BlogComponent } from './components/body/blog/blog.component';
import { PricingComponent } from './components/body/pricing/pricing.component';
import { ListComponent } from './components/body/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    Hello1Component,
    NgForObjectComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    routingComponents,
  
    BannerComponent,
  
    BlogComponent,
  
    PricingComponent,
  
    ListComponent
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
