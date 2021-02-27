import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './components/app.component';
import { MainComponent } from './components/main/main.component';
import { DetailComponent } from './components/detail/detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { CategoryComponent } from './components/category/category.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ArticleSearchComponent } from './components/article-search/article-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    MainComponent,
    DetailComponent,
    FooterComponent,
    TopbarComponent,
    CategoryComponent,
    CarritoComponent,
    ArticleSearchComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
