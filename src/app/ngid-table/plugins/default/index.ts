import { createPlugin } from '../../helper/create-plugin';
import { TablePluginDataModel } from '../../model/table-plugin-data.model';
import { DefaultPlugin } from '../../model/table-plugin-type.model';
import { TablePluginModel } from '../../model/table-plugin.model';
import { DefaultComponent } from './default.component';
export const defaultTablePlugin: TablePluginModel = {
  name: 'default',
  onCreate: (data: TablePluginDataModel): void => {
    const defaultPlugin = data.plugin as DefaultPlugin;
    createPlugin(data, DefaultComponent, [
      'td-content-default',
      defaultPlugin.customClass || '',
    ]);
  },
};
