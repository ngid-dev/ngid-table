import { ImgAttributeModel } from './img-attribute.model';
import { TablePluginModel } from './table-plugin.model';

export type DEFAULT_PLUGIN = 'default';
export type CUSTOM_PLUGIN = 'custom';
export type HYPERLINK_PLUGIN = 'hyperlink';
export type IMG_PLUGIN = 'img';

export type AvailableTablePluginName =
  | DEFAULT_PLUGIN
  | CUSTOM_PLUGIN
  | IMG_PLUGIN
  | HYPERLINK_PLUGIN;

interface DefaultPlugin {
  name: DEFAULT_PLUGIN;
}

export interface HyperlinkPlugin {
  name: HYPERLINK_PLUGIN;
  createHref?: (record: any) => string;
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename';
  onClick?: (record: any) => void;
}

export interface ImgPlugin {
  name: IMG_PLUGIN;
  onClick?: (record: any) => void;
  rounded?: boolean;
  createAttribute?: (record: any) => ImgAttributeModel;
}

interface CustomPlugin extends TablePluginModel {
  name: CUSTOM_PLUGIN;
}

export type AllTableColumnPluginTypeModel =
  | DefaultPlugin
  | HyperlinkPlugin
  | CustomPlugin
  | ImgPlugin
  | AvailableTablePluginName;
