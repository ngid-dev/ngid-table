import { Component, Input, OnInit } from '@angular/core';
import { ImgAttributeModel } from '../../model/img-attribute.model';
import { TablePluginDataModel } from '../../model/table-plugin-data.model';
import { ImgPlugin } from '../../model/table-plugin-type.model';

@Component({
  templateUrl: './img.component.html',
})
export class ImgComponent implements OnInit {
  @Input() pluginData: TablePluginDataModel;

  public imgPlugin: ImgPlugin;
  public attr: ImgAttributeModel;
  public isBrokenImage: boolean;
  ngOnInit(): void {
    this.setInitializationState();
    this.setAttrState();
  }

  private setInitializationState(): void {
    this.imgPlugin = this.pluginData.plugin as ImgPlugin;
  }

  private setAttrState(): void {
    const defaultAttr = {
      alt: '',
      width: 64,
      height: 64,
    };
    if (this.imgPlugin.createAttribute) {
      const attr =
        this.imgPlugin.createAttribute(this.pluginData.column.record) || {};
      this.attr = Object.assign(defaultAttr, attr);
    } else {
      this.attr = defaultAttr;
    }
  }

  public handleClick(): void {
    if (this.imgPlugin.onClick) {
      this.imgPlugin.onClick(this.pluginData.column.record);
    }
  }

  public onError(event: Event): void {
    this.isBrokenImage = true;
    const imgElement = event.target as HTMLImageElement;
    imgElement.style.display = 'none';
  }
}
