import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NgidTableModule } from './ngid-table/ngid-table.module';
import { Service } from './service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule, NgidTableModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    Service.injector = injector;
  }
}
