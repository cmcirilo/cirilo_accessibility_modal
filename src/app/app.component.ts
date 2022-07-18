import { Component, TemplateRef, ViewChild } from '@angular/core';
import {
  ModalRef,
  ModalService,
} from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title = 'cirilo_accessibility_modal';
  public firstName = 'Cirilo';
  public modalRef: ModalRef;

  constructor(private modalService: ModalService) {}

  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details',
    });
  }
}
