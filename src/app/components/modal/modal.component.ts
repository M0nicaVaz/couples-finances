import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionClose, ionAdd } from '@ng-icons/ionicons';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ ionClose, ionAdd })],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  constructor() {}

  @ViewChild('dialog') dialog: ElementRef = {} as ElementRef;
  @Input({ required: true }) triggerText: string = '';

  openDialog() {
    this.dialog.nativeElement.showModal();
  }

  closeDialog() {
    this.dialog.nativeElement.close();
  }
}
