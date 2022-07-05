import { ViewContainerRef } from '@angular/core';
import { TableColumn } from '../domain/table-column';
import { TableRow } from '../domain/table-row';
import { AllTableColumnPluginTypeModel } from './table-plugin-type.model';

export interface TablePluginDataModel {
  column: TableColumn;
  row: TableRow;
  element: HTMLElement;
  viewContainerRef: ViewContainerRef;
  plugin: AllTableColumnPluginTypeModel;
}
