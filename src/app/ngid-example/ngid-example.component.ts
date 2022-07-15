import { Component, Input } from '@angular/core';
import { TablePluginDataModel } from '../ngid-table/model/table-plugin-data.model';

@Component({
  selector: 'ngid-example',
  templateUrl: './ngid-example.component.html',
})
export class NgidExampleComponent {
  @Input() pluginData: TablePluginDataModel;
}
