import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionAddOutline } from '@ng-icons/ionicons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ ionAddOutline })],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
