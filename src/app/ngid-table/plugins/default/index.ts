import { TablePluginDataModel } from '../../model/table-plugin-data.model';
import { TablePluginModel } from '../../model/table-plugin.model';
import { DefaultComponent } from './default.component';
export const defaultTablePlugin: TablePluginModel = {
  name: 'default',
  onCreate: (data: TablePluginDataModel): void => {
    const divElement = document.createElement('div');
    divElement.classList.add('td-content-default');

    const componentRef =
      data.viewContainerRef.createComponent(DefaultComponent);

    Object.assign(componentRef.instance, {
      pluginData: data,
    });

    divElement.appendChild(componentRef.location.nativeElement);
    data.element.appendChild(divElement);
  },
};
