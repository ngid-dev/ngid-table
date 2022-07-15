import { Component, Input, OnInit } from '@angular/core';
import { TablePluginDataModel } from '../../model/table-plugin-data.model';
import { HyperlinkPlugin } from '../../model/table-plugin-type.model';

@Component({
  templateUrl: './hyperlink.component.html',
})
export class HyperlinkComponent implements OnInit {
  @Input() pluginData: TablePluginDataModel;

  public hyperlinkPlugin: HyperlinkPlugin;
  public href: string;

  ngOnInit(): void {
    this.setInitializationState();
    this.setInitializationHref();
  }

  private setInitializationState(): void {
    const isString = typeof this.pluginData.plugin === 'string';
    this.hyperlinkPlugin = isString
      ? ({} as HyperlinkPlugin)
      : (this.pluginData.plugin as HyperlinkPlugin);
  }

  private setInitializationHref(): void {
    if (this.hyperlinkPlugin.createHref) {
      this.href = this.hyperlinkPlugin.createHref(
        this.pluginData.column.record
      );
    }
  }

  public handleClick(event: MouseEvent): void {
    if (this.hyperlinkPlugin.onClick) {
      event.preventDefault();
      this.hyperlinkPlugin.onClick(this.pluginData.column.record);
    }
  }
}
