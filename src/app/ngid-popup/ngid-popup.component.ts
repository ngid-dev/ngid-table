import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngid-popup',
  templateUrl: './ngid-popup.component.html',
})
export class NgidPopupComponent {
  @Input() header: string;
  constructor(public ngbActiveModal: NgbActiveModal) {}
}
