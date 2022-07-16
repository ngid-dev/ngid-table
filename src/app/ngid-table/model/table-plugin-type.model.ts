import { TableColumn } from '../domain/table-column';
import { TableRow } from '../domain/table-row';
import { AnchorAttributeModel } from './anchor-attribute.model';
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

export interface DefaultPlugin {
  name: DEFAULT_PLUGIN;
  customClass?: string;
  beforeCreate?: (column: TableColumn, row?: TableRow) => void;
  afterCreate?: (tdContentElement: HTMLElement) => void;
}

export interface HyperlinkPlugin {
  name: HYPERLINK_PLUGIN;
  onClick?: (record: any) => void;
  createAttribute?: (record: any) => AnchorAttributeModel;
  customClass?: string;
  beforeCreate?: (column: TableColumn, row?: TableRow) => void;
  afterCreate?: (tdContentElement: HTMLElement) => void;
}

export interface ImgPlugin {
  name: IMG_PLUGIN;
  onClick?: (record: any) => void;
  rounded?: boolean;
  createAttribute?: (record: any) => ImgAttributeModel;
  customClass?: string;
  beforeCreate?: (column: TableColumn, row?: TableRow) => void;
  afterCreate?: (tdContentElement: HTMLElement) => void;
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
