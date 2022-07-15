import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgidPopupModule } from 'src/app/ngid-popup/ngid-popup.module';
import { DirectiveModule } from '../../../directive/directive.module';
import { PipesModule } from '../../../pipes/pipes.module';
import { PluginsModule } from '../../../plugins/plugins.module';
import { DefaultComponent } from './default.component';
import { PopupFilterComponent } from './popup-filter.component';
@NgModule({
  imports: [
    CommonModule,
    NgbPaginationModule,
    DirectiveModule,
    NgidPopupModule,
    PipesModule,
    PluginsModule,
  ],
  declarations: [DefaultComponent, PopupFilterComponent],
  exports: [DefaultComponent],
})
export class DefaultModule {}
