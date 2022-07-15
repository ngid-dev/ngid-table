import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'table-value-wrapper',
  templateUrl: './value-wrapper.component.html',
})
export class ValueWrapperComponent implements OnInit {
  @Input() public value: any;

  public isEmpty: boolean;

  ngOnInit(): void {
    this.setIsEmptyState();
  }

  private setIsEmptyState(): void {
    this.isEmpty = typeof this.value === 'undefined' || this.value === null;
  }
}
