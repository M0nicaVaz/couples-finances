import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionAddOutline } from '@ng-icons/ionicons';
import { FinancesService } from '../../services/finances.service';
import { OutcomeFormComponent } from '../../components/outcome-form/outcome-form.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { IncomeFormComponent } from '../../components/income-form/income-form.component';
import { CardComponent } from '../../components/card/card.component';
import { ChartComponent } from '../../components/chart/chart.component';
import { SpendingsChartComponent } from '../../components/spendings-chart/spendings-chart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIconComponent,
    OutcomeFormComponent,
    ModalComponent,
    IncomeFormComponent,
    CardComponent,
    ChartComponent,
    SpendingsChartComponent,
  ],
  viewProviders: [provideIcons({ ionAddOutline })],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private financesService: FinancesService) {}

  // ngOnInit(): void {
  //   this.financesService.getOutcomes('outcomes').subscribe((outcomes) => {
  //     console.log(outcomes);
  //   });

  //   this.financesService.getIncomes('incomes').subscribe((outcomes) => {
  //     console.log(outcomes);
  //   });
  // }
}
