import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SuperheroComponent } from './component/superhero/superhero.component';
import { InterceptorService } from './services/interceptor.service';
import { GamePageComponent } from './component/game-page/game-page.component';
import { RandomPageComponent } from './component/random-page/random-page.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SuperherolistComponent } from './component/superherolist/superherolist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPageComponent } from './component/search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SuperheroComponent,
    GamePageComponent,
    RandomPageComponent,
    SuperherolistComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
