import { CurrencyPipe, DatePipe } from '@angular/common';
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
  public readonly DEFAULT_DATE_FORMAT = 'dd/MM/yyyy';
  public readonly DEFAULT_CURRENCY_DISPLAY = 'Rp ';

  @Input() column: TableColumn;
  @Input() row: TableRow;

  private plugins: Array<{
    plugin: TablePluginModel;
    data: TablePluginDataModel;
  }>;
  private tablePluginService: TablePluginService;

  constructor(
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private date: DatePipe,
    private currency: CurrencyPipe
  ) {
    this.tablePluginService = TablePluginService.create();
    this.plugins = new Array();
  }

  ngOnInit(): void {
    this.callPluginBeforeCreate();
    this.callPluginCreate();
    this.callPluginAfterCreate();
    // this.setTextContent();
  }

  private callPluginBeforeCreate(): void {
    const { plugins } = this.column.model;
    if (plugins) {
      if (typeof plugins === 'string') {
        const plugin = this.tablePluginService.pluginMap.get(plugins);
        if (plugin) {
          this.plugins.push({
            plugin: plugin,
            data: this.createTablePluginData(plugins),
          });
        }
      }
    }
  }

  private callPluginCreate(): void {
    if (this.plugins.length === 0) {
      const plugin = this.tablePluginService.pluginMap.get('default');
      if (plugin) {
        this.plugins.push({
          plugin: plugin,
          data: this.createTablePluginData('default'),
        });
      }
    }
    this.plugins.forEach((plugin) => {
      if (plugin.plugin.beforeCreate) {
        plugin.plugin.beforeCreate(plugin.data);
      }
    });
  }

  private callPluginAfterCreate(): void {}

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

  private setTextContent(): void {
    if (this.column.model.component) {
      const { component } = this.column.model;
      const isHasCallbacks = typeof component === 'object';
      const componentTarget = isHasCallbacks ? component.target : component;
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
    } else {
      const divTdTextElement = document.createElement('div');
      divTdTextElement.classList.add('td-text');
      divTdTextElement.textContent = this.createValue(this.column.value) || '-';
      this.elementRef.nativeElement.appendChild(divTdTextElement);
    }
  }

  private createValue(value: any): any {
    const { type } = this.column.model;
    if (typeof value === 'undefined' || value === null || !type) return value;

    if (typeof type === 'object') {
      if (type.name === 'date') {
        return this.date.transform(
          value,
          type.format || this.DEFAULT_DATE_FORMAT,
          type.timezone,
          type.locale
        );
      } else if (type.name === 'currency') {
        return this.currency.transform(
          value,
          type.currencyCode,
          type.display || this.DEFAULT_CURRENCY_DISPLAY,
          type.digitsInfo,
          type.locale
        );
      } else {
        return value;
      }
    } else {
      if (type === 'date') {
        return this.date.transform(value, this.DEFAULT_DATE_FORMAT);
      } else if (type === 'currency') {
        return this.currency
          .transform(value, '', this.DEFAULT_CURRENCY_DISPLAY, '0.0')
          ?.replace(/,/g, '.');
      } else if (type === 'number') {
        return value;
      }
    }
  }
}
