import { Component, Input, ViewEncapsulation } from '@angular/core';

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
}
