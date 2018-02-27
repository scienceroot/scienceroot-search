import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ScrAuthenticationModule, ScrAuthenticationStoreConfig, ScrSecureHttpClientModule} from "@scienceroot/security";
import {RouterModule} from "@angular/router";
import {ScrSearchStoreConfigModel} from "search";
import {ScrSearchRoutesModule} from "search";

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ScrAuthenticationModule,
    ScrSecureHttpClientModule,
    ScrSearchRoutesModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/search', pathMatch: 'full'}
    ])
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  //private host: string = 'https://api.scienceroots.com';
  private host: string = 'http://localhost:8080';

  constructor() {
    new ScrAuthenticationStoreConfig(
      'scrAuthToken',
      `${this.host}/register`,
      `${this.host}/login`,
      `${this.host}/token`,
    ).save();

    new ScrSearchStoreConfigModel(
      `${this.host}/search`,
      `${this.host}/search/papers`,
      `${this.host}/search/users`
    ).save();
  }
}

