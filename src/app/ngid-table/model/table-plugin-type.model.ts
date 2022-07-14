import { TablePluginModel } from './table-plugin.model';

export type DEFAULT_PLUGIN = 'default';
export type CUSTOM_PLUGIN = 'custom';
export type HYPERLINK = 'hyperlink';

export type AvailableTablePluginName =
  | DEFAULT_PLUGIN
  | CUSTOM_PLUGIN
  | HYPERLINK;

interface DefaultPlugin {
  name: DEFAULT_PLUGIN;
}

interface CustomPlugin extends TablePluginModel {
  name: CUSTOM_PLUGIN;
}

export interface HyperlinkPlugin {
  name: HYPERLINK;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename';
  onClick?: (record: any) => void;
}

export type AllTableColumnPluginTypeModel =
  | DefaultPlugin
  | CustomPlugin
  | HyperlinkPlugin
  | AvailableTablePluginName;
