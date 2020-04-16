import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { PriceComponent } from './price/price.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { NewServiceService } from './new-service.service';

const appRoutes: Routes = [
{path: '', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'news', component: NewsComponent},
{path: 'price', component: PriceComponent},
{path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    PriceComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
