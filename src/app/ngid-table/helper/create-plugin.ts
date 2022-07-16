import { Type } from '@angular/core';
import { TablePluginDataModel } from '../model/table-plugin-data.model';

export const createPlugin = (
  data: TablePluginDataModel,
  component: Type<any>,
  classList: Array<string>
): void => {
  const divElement = document.createElement('div');
  (classList || []).forEach((className) => {
    if (!className) return;
    divElement.classList.add(className);
  });

  const componentRef = data.viewContainerRef.createComponent(component);

  Object.assign(componentRef.instance, {
    pluginData: data,
  });

  divElement.appendChild(componentRef.location.nativeElement);
  data.element.appendChild(divElement);
};
