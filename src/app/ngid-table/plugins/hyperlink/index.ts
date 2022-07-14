import { TablePluginDataModel } from '../../model/table-plugin-data.model';
import { TablePluginModel } from '../../model/table-plugin.model';
import { HyperlinkComponent } from './hyperlink.component';
export const hyperlinkTablePlugin: TablePluginModel = {
  name: 'hyperlink',
  onCreate: (data: TablePluginDataModel): void => {
    const divElement = document.createElement('div');
    divElement.classList.add('td-content-hyperlink');

    const componentRef =
      data.viewContainerRef.createComponent(HyperlinkComponent);

    Object.assign(componentRef.instance, {
      pluginData: data,
    });

    divElement.appendChild(componentRef.location.nativeElement);
    data.element.appendChild(divElement);
  },
};
