import { NgModule } from '@angular/core';
import { DefaultModule } from './default/default.module';
import { HyperlinkModule } from './hyperlink/hyperlink.module';
import { ImgModule } from './img/img.module';

@NgModule({
  imports: [DefaultModule, HyperlinkModule, ImgModule],
  exports: [DefaultModule, HyperlinkModule, ImgModule],
})
export class PluginsModule {}
