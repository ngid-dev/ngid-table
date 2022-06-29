import { Type } from '@angular/core';
import { TableColumn } from '../domain/table-column';

export class TableColumnModel {
  field?: string;
  header: string;
  childrens?: Array<TableColumnModel>;
  sortable?: boolean;
  component?:
    | Type<any>
    | {
        target: Type<any>;
        callbacksInstance: (column: TableColumn) => { [key: string]: any };
      };
}
