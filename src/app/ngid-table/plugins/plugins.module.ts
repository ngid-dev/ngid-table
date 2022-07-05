import { NgModule } from '@angular/core';
import { DefaultModule } from './default/default.module';

@NgModule({
  imports: [DefaultModule],
  exports: [DefaultModule],
})
export class PluginsModule {}
