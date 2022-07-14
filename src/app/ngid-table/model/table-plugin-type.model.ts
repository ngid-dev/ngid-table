import { TablePluginModel } from './table-plugin.model';

export type DEFAULT_PLUGIN = 'default';
export type CUSTOM_PLUGIN = 'custom';

export type AvailableTablePluginName = DEFAULT_PLUGIN | CUSTOM_PLUGIN;

interface DefaultPlugin {
  name: DEFAULT_PLUGIN;
}

interface CustomPlugin extends TablePluginModel {
  name: CUSTOM_PLUGIN;
}

export type AllTableColumnPluginTypeModel =
  | DefaultPlugin
  | CustomPlugin
  | AvailableTablePluginName;
