import { Type } from '@angular/core';
import { TableColumn } from '../domain/table-column';
import { TableColumnType } from '../type/table-column.type';
import { AllTableColumnTypeModel } from './table-column-type.model';
import { AllTableColumnPluginTypeModel } from './table-plugin-type.model';

export class TableColumnModel {
  field?: string;
  header: string;
  childrens?: Array<TableColumnModel>;
  sortable?: boolean;
  type?: TableColumnType | AllTableColumnTypeModel;
  plugins?:
    | AllTableColumnPluginTypeModel
    | Array<AllTableColumnPluginTypeModel>;
  component?:
    | Type<any>
    | {
        target: Type<any>;
        callbacksInstance: (column: TableColumn) => { [key: string]: any };
      };
}
