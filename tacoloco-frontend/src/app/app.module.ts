import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TacosComponent } from './tacos/tacos.component';
import { OrderComponent } from './order/order.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataService } from './services/data.service';
import { NavbarComponent } from './navbar/navbar.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    TacosComponent,
    OrderComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      {path: 'tacos', component: TacosComponent },
      {path: 'order', component: OrderComponent }
    ])
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
