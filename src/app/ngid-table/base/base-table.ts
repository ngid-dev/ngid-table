import { Component, Inject, Input, OnInit } from '@angular/core';
import { TableModel } from '../model/table.model';

@Component({
  template: '',
})
export abstract class BaseTable implements OnInit {
  @Input() model: TableModel<any>;
  protected abstract onInitTable(): void;
  constructor(@Inject(String) public moduleCode: string) {}

  ngOnInit(): void {
    console.log('INFO: Come from ngOnInit');
    this.onInitTable();
  }
}
