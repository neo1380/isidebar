import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ISidebarModule} from '../app/isidebar/isidebar.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ISidebarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
