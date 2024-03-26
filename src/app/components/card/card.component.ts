import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CardVariants } from '../../interfaces/cart.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor() {}

  @Input({ required: true }) firstName: string = '';
  @Input() secondName: string = '';
  @Input({ required: true }) income: string = '';
  @Input({ required: true }) outcome: string = '';
  @Input({ required: true }) budget: string = '';
  @Input({ transform: getStylesFromVariant }) variant: CardVariants = 'primary';
}

function getStylesFromVariant(variant: CardVariants) {
  const variantStyles: Record<CardVariants, string> = {
    primary: 'border-amber-500 ',
    secondary: 'border-cyan-500 ',
    total: 'border-dove-400 ',
  };

  return variantStyles[variant];
}
