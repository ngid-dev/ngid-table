import { TablePluginDataModel } from '../../model/table-plugin-data.model';
import { ImgPlugin } from '../../model/table-plugin-type.model';
import { TablePluginModel } from '../../model/table-plugin.model';
import { ImgComponent } from './img.component';
export const imgTablePlugin: TablePluginModel = {
  name: 'img',
  onCreate: (data: TablePluginDataModel): void => {
    const imgPlugin: ImgPlugin = data.plugin as ImgPlugin;
    const divElement = document.createElement('div');
    divElement.classList.add(`td-content-img`);
    if (imgPlugin.rounded) {
      divElement.classList.add('rounded');
    }

    const componentRef = data.viewContainerRef.createComponent(ImgComponent);

    Object.assign(componentRef.instance, {
      pluginData: data,
    });

    divElement.appendChild(componentRef.location.nativeElement);
    data.element.appendChild(divElement);
  },
};
