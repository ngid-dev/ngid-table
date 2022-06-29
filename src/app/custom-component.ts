import { Component, Input, OnInit } from '@angular/core';
import { TableColumn } from './ngid-table/domain/table-column';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.html',
})
export class CustomComponent implements OnInit {
  @Input() column: TableColumn;

  constructor() {}

  ngOnInit(): void {}
}
