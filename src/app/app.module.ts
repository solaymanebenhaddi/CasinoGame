import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { GamesComponent } from './Components/games/games.component';
import { HttpClientModule } from '@angular/common/http';
import { GamesService } from './Services/games.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [GamesComponent,GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
