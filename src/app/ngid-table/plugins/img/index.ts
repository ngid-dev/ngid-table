import { createPlugin } from '../../helper/create-plugin';
import { TablePluginDataModel } from '../../model/table-plugin-data.model';
import { ImgPlugin } from '../../model/table-plugin-type.model';
import { TablePluginModel } from '../../model/table-plugin.model';
import { ImgComponent } from './img.component';
export const imgTablePlugin: TablePluginModel = {
  name: 'img',
  onCreate: (data: TablePluginDataModel): void => {
    const imgPlugin: ImgPlugin = data.plugin as ImgPlugin;
    const classList = [
      'td-content-img',
      imgPlugin.rounded ? 'rounded' : '',
      imgPlugin.customClass || '',
    ];
    createPlugin(data, ImgComponent, classList);
  },
};
