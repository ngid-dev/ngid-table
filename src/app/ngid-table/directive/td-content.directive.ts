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
  public plugins: Array<{
    plugin: TablePluginModel;
    pluginModel: AllTableColumnPluginTypeModel;
  }>;
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

      let instance: { [key: string]: any } = {};
      if (isHasCallbacks) {
        instance = component.callbacksInstance(this.column) || {};
      } else {
        const pluginData = this.createTablePluginData('default');
        instance = { pluginData };
      }

      Object.assign(componentRef.instance, instance);

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
        this.plugins.push({
          plugin: defaultPlugin,
          pluginModel: 'default',
        });
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
          this.plugins.push({
            plugin: plugin,
            pluginModel: pluginModel,
          });
        }
      });
    }
  }

  private callPluginBeforeCreate(): void {
    this.plugins.forEach((plugin) => {
      const beforeCreate =
        (plugin.pluginModel as any).beforeCreate || plugin.plugin.beforeCreate;
      if (beforeCreate) {
        beforeCreate(this.column, this.row);
      }
    });
  }

  private callPluginCreate(): void {
    this.plugins.forEach((plugin) => {
      if (plugin.plugin.onCreate) {
        const model = this.createTablePluginData(plugin.pluginModel);
        plugin.plugin.onCreate(model);
      }
    });
  }

  private callPluginAfterCreate(): void {
    this.plugins.forEach((plugin) => {
      const afterCreate =
        (plugin.pluginModel as any).afterCreate || plugin.plugin.afterCreate;
      if (afterCreate) {
        afterCreate(this.elementRef.nativeElement);
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
