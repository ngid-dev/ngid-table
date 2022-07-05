import { TablePluginDataModel } from './table-plugin-data.model';
import { AvailableTablePluginName } from './table-plugin-type.model';

export interface TablePluginModel {
  name: AvailableTablePluginName;
  beforeCreate?: (data: TablePluginDataModel) => any;
  onCreate?: (data: TablePluginDataModel) => any;
  afterCreate?: (data: TablePluginDataModel) => any;
}
