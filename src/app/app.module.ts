import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { CardComponent } from './card/card.component';

import { CardsResolve } from './_resolvers/cards.resolver';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppBodyComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        component: AppBodyComponent,
        resolve: {
          cards: CardsResolve
        }
      }
    ])
  ],
  exports: [RouterModule],
  providers: [CardsResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
