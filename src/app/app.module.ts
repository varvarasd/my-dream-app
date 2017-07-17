import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { CssStylesComponent } from './css-styles/css-styles.component';


@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    CssStylesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
