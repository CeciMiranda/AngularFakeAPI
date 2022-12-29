import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
     

import { AppComponent } from './app.component';
import { FilmesService } from './filmes.service';
import { FilmesComponent } from './filmes/filmes.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FilmesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    //TableModule

  ],
  providers: [HttpClientModule, FilmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }


