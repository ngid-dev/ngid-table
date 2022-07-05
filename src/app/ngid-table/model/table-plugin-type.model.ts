export type DEFAULT_PLUGIN = 'default';

export type AvailableTablePluginName = DEFAULT_PLUGIN;

interface DefaultPlugin {
  name: DEFAULT_PLUGIN;
}

export type AllTableColumnPluginTypeModel =
  | DefaultPlugin
  | AvailableTablePluginName;
