import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CustomComponent } from './custom-component';
import { NgidBadgeModule } from './ngid-badge/ngid-badge.module';
import { NgidTableModule } from './ngid-table/ngid-table.module';
import { Service } from './service';

@NgModule({
  declarations: [AppComponent, CustomComponent],
  imports: [
    BrowserModule,
    NgbModule,
    NgidTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgidBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    Service.injector = injector;
  }
}
