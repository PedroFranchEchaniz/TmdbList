import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './ui/list/list.component';
import { ListDetailComponent } from './components/list-detail/list-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MovieItemComponent,
    ListComponent,
    ListDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
