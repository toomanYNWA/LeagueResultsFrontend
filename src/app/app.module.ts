import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminUploadComponent } from './pages/admin-upload/admin-upload.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    AdminLoginComponent,
    HomePageComponent,
    AdminUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
