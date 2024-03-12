import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminUploadComponent } from './pages/admin-upload/admin-upload.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminNewsComponent } from './pages/admin-news/admin-news.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin-login', pathMatch: 'full' },
  {path:'first-page', component:FirstPageComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'admin-upload',component:AdminUploadComponent},
  {path:'home-page',component:HomePageComponent},
  {path:'admin-news',component:AdminNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
