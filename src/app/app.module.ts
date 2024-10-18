import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { app, analytics } from '../firebase-config';  // Import your Firebase config

@NgModule({
  declarations: [
 
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(app),  // Initialize Firebase here
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
