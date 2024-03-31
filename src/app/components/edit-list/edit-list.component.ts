import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionPencil, ionTrashBin } from '@ng-icons/ionicons';
import { ButtonIconComponent } from '../button-icon/button-icon.component';

@Component({
  selector: 'app-edit-list',
  standalone: true,
  imports: [NgIconComponent, ButtonIconComponent],
  viewProviders: [provideIcons({ ionPencil, ionTrashBin })],
  templateUrl: './edit-list.component.html',
  styleUrl: './edit-list.component.scss',
})
export class EditListComponent {}
