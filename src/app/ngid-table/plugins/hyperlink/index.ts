import { createPlugin } from '../../helper/create-plugin';
import { TablePluginDataModel } from '../../model/table-plugin-data.model';
import { HyperlinkPlugin } from '../../model/table-plugin-type.model';
import { TablePluginModel } from '../../model/table-plugin.model';
import { HyperlinkComponent } from './hyperlink.component';
export const hyperlinkTablePlugin: TablePluginModel = {
  name: 'hyperlink',
  onCreate: (data: TablePluginDataModel): void => {
    const hyperlinkPlugin = data.plugin as HyperlinkPlugin;
    createPlugin(data, HyperlinkComponent, [
      'td-content-hyperlink',
      hyperlinkPlugin.customClass || '',
    ]);
  },
};
