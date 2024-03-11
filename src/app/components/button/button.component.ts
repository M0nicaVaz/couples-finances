import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonVariants } from '../../interfaces/button.interface';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionAdd } from '@ng-icons/ionicons';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ ionAdd })],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  constructor() {}

  @Input() text: string = '';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input({ transform: getStylesFromVariant }) variant: ButtonVariants =
    'confirm';

  @Output('submit') onClick = new EventEmitter<void>();

  submit() {
    this.onClick.emit();
  }
}

function getStylesFromVariant(variant: ButtonVariants) {
  const variantStyles = {
    cancel: 'border-gray-500 enabled:hover:bg-gray-500',
    confirm: 'border-emerald-500 bg-emerald-500 enabled:hover:bg-emerald-400 ',
    danger: 'border-red-500 bg-red-500 enabled:hover:bg-red-600',
  };

  return variantStyles[variant];
}
