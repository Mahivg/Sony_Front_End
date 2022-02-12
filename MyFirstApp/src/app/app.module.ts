import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { MySecondComponent } from './my-second/my-second.component';
import { MyThirdComponent } from './my-third/my-third.component';
import { StorageService } from './services/storage.service';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MySecondComponent,
    MyThirdComponent,
    NavComponent
  ],
  imports: [
    BrowserModule
  ],
  // providers: [ StorageService ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
