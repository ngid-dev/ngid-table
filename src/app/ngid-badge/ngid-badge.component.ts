import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngid-badge',
  templateUrl: './ngid-badge.component.html',
})
export class NgidBadgeComponent {
  @Input() variant:
    | 'PRIMARY'
    | 'SECONDARY'
    | 'INFO'
    | 'SUCCESS'
    | 'WARNING'
    | 'DANGER' = 'PRIMARY';
  @Input() text: string;
}
