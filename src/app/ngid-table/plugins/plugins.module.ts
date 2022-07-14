import { NgModule } from '@angular/core';
import { DefaultModule } from './default/default.module';
import { HyperlinkModule } from './hyperlink/hyperlink.module';

@NgModule({
  imports: [DefaultModule, HyperlinkModule],
  exports: [DefaultModule, HyperlinkModule],
})
export class PluginsModule {}
