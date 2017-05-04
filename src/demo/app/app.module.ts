import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContextMenuModule } from 'ngx-contextmenu';
import { TreeModule } from '../../../index';

@NgModule({
  declarations: [AppComponent],
  imports:      [BrowserModule, TreeModule, ContextMenuModule],
  bootstrap:    [AppComponent]
})
export class AppModule {}
