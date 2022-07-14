import { Component, Input, OnInit } from '@angular/core';
import { TablePluginDataModel } from '../../model/table-plugin-data.model';
import { HyperlinkPlugin } from '../../model/table-plugin-type.model';

@Component({
  templateUrl: './hyperlink.component.html',
})
export class HyperlinkComponent implements OnInit {
  @Input() pluginData: TablePluginDataModel;

  public hyperlinkPlugin: HyperlinkPlugin;

  ngOnInit(): void {
    this.setInitializationState();
  }

  private setInitializationState(): void {
    const isString = typeof this.pluginData.plugin === 'string';
    this.hyperlinkPlugin = isString
      ? ({} as HyperlinkPlugin)
      : (this.pluginData.plugin as HyperlinkPlugin);
  }

  public handleClick(event: MouseEvent): void {
    if (this.hyperlinkPlugin.onClick) {
      event.preventDefault();
      this.hyperlinkPlugin.onClick(this.pluginData.column.record);
    }
  }
}
