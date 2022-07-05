import { Component, Input, OnInit } from '@angular/core';
import { TablePluginDataModel } from '../../model/table-plugin-data.model';

@Component({
  templateUrl: './default.component.html',
})
export class DefaultComponent implements OnInit {
  @Input() pluginData: TablePluginDataModel;

  constructor() {}

  ngOnInit(): void {}
}
