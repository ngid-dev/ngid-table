import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgidTableModule } from './ngid-table/ngid-table.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule, NgidTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
