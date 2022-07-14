import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { TableColumn } from '../domain/table-column';
import { TableRow } from '../domain/table-row';
import { TablePluginDataModel } from '../model/table-plugin-data.model';
import { AllTableColumnPluginTypeModel } from '../model/table-plugin-type.model';
import { TablePluginModel } from '../model/table-plugin.model';
import { TablePluginService } from '../utils/table-plugin-service';

@Directive({
  selector: '[tdContent]',
})
export class TdContentDirective implements OnInit {
  @Input() column: TableColumn;
  @Input() row: TableRow;

  private tablePluginService: TablePluginService;
  public plugins: Array<TablePluginModel>;
  constructor(
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef
  ) {
    this.tablePluginService = TablePluginService.create();
    this.plugins = new Array();
  }

  ngOnInit(): void {
    this.column.model.component ? this.createComponent() : this.createPlugins();
  }

  private createComponent(): void {
    const { component } = this.column.model;
    const isHasCallbacks = typeof component === 'object';
    const componentTarget = isHasCallbacks ? component.target : component;
    if (componentTarget) {
      const componentRef =
        this.viewContainerRef.createComponent(componentTarget);

      const divElement = document.createElement('div');
      divElement.classList.add('td-content-component');

      Object.assign(
        componentRef.instance,
        isHasCallbacks
          ? component.callbacksInstance(this.column) || { column: this.column }
          : { column: this.column }
      );

      divElement.appendChild(componentRef.location.nativeElement);
      this.elementRef.nativeElement.appendChild(divElement);
    }
  }

  private createPlugins(): void {
    this.setPluginsState();
    this.callPluginBeforeCreate();
    this.callPluginCreate();
    this.callPluginAfterCreate();
  }

  private setPluginsState(): void {
    const { plugins: pluginsModel } = this.column.model;
    if (!pluginsModel) {
      const defaultPlugin = this.tablePluginService.pluginMap.get('default');
      if (defaultPlugin) {
        this.plugins.push(defaultPlugin);
      }
    } else {
      const pluginModels = Array.isArray(pluginsModel)
        ? pluginsModel
        : [pluginsModel];
      pluginModels.forEach((pluginModel: AllTableColumnPluginTypeModel) => {
        const isPluginObject = typeof pluginModel === 'object';
        let pluginName: string = isPluginObject
          ? pluginModel.name
          : pluginModel;
        const plugin = this.tablePluginService.pluginMap.get(pluginName);
        if (plugin) {
          this.plugins.push(plugin);
        } else {
          this.plugins.push(pluginModel as TablePluginModel);
        }
      });
    }
  }

  private callPluginBeforeCreate(): void {
    this.plugins.forEach((plugin) => {
      if (plugin.beforeCreate) {
        plugin.beforeCreate(this.column, this.row);
      }
    });
  }

  private callPluginCreate(): void {
    this.plugins.forEach((plugin) => {
      if (plugin.onCreate) {
        const model = this.createTablePluginData(plugin);
        plugin.onCreate(model);
      }
    });
  }

  private callPluginAfterCreate(): void {
    this.plugins.forEach((plugin) => {
      if (plugin.afterCreate) {
        plugin.afterCreate(this.elementRef.nativeElement);
      }
    });
  }

  private createTablePluginData(
    plugin: AllTableColumnPluginTypeModel
  ): TablePluginDataModel {
    return {
      column: this.column,
      row: this.row,
      element: this.elementRef.nativeElement,
      viewContainerRef: this.viewContainerRef,
      plugin: plugin,
    };
  }
}
