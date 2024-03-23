import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminUploadComponent } from './pages/admin-upload/admin-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminNewsComponent } from './pages/admin-news/admin-news.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { FixturesPageComponent } from './pages/fixtures-page/fixtures-page.component';
import { ClubsPageComponent } from './pages/clubs-page/clubs-page.component';
import { PlayerStatsComponent } from './pages/player-stats/player-stats.component';
import { PlayersComponent } from './pages/players/players.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    AdminLoginComponent,
    HomePageComponent,
    AdminUploadComponent,
    AdminNewsComponent,
    TablePageComponent,
    ResultsPageComponent,
    FixturesPageComponent,
    ClubsPageComponent,
    PlayerStatsComponent,
    PlayersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
