import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionPencil, ionTrashBin } from '@ng-icons/ionicons';

@Component({
  selector: 'app-button-icon',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ ionPencil, ionTrashBin })],
  templateUrl: './button-icon.component.html',
  styleUrl: './button-icon.component.scss',
})
export class ButtonIconComponent {
  @Input({ required: true }) text: string = '';
  @Output('click') onClick = new EventEmitter<void>();

  click() {
    this.onClick.emit();
  }
}
