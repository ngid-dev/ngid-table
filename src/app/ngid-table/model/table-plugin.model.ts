import { TableColumn } from '../domain/table-column';
import { TableRow } from '../domain/table-row';
import { TablePluginDataModel } from './table-plugin-data.model';
import { AvailableTablePluginName } from './table-plugin-type.model';
export interface TablePluginModel {
  name: AvailableTablePluginName;
  beforeCreate?: (column: TableColumn, row?: TableRow) => void;
  onCreate?: (data: TablePluginDataModel) => void;
  afterCreate?: (tdContentElement: HTMLElement) => void;
}
