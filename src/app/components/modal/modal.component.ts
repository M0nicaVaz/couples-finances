import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionClose } from '@ng-icons/ionicons';
import { ButtonComponent } from '../button/button.component';
import { ButtonVariants } from '../../interfaces/button.interface';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIconComponent, ButtonComponent],
  viewProviders: [provideIcons({ ionClose })],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  constructor() {}

  @ViewChild('dialog') dialog: ElementRef = {} as ElementRef;
  @Input({ required: true }) triggerText: string = '';
  @Input() triggerVariant: ButtonVariants = 'cancel';

  openDialog() {
    this.dialog.nativeElement.showModal();
  }

  closeDialog() {
    this.dialog.nativeElement.close();
  }
}
