import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionAddOutline } from '@ng-icons/ionicons';
import { FinancesService } from '../services/finances.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ ionAddOutline })],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private financesService: FinancesService) {}

  ngOnInit(): void {
    this.financesService.getOutcomes('/outcomes', {}).subscribe((outcomes) => {
      console.log(outcomes);
    });

    this.financesService.getIncomes('/incomes', {}).subscribe((outcomes) => {
      console.log(outcomes);
    });
  }
}
