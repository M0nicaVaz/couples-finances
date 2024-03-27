import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-spendings-chart',
  standalone: true,
  imports: [],
  templateUrl: './spendings-chart.component.html',
  styleUrl: './spendings-chart.component.scss',
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
})
export class SpendingsChartComponent implements OnInit {
  chart: any;

  ngOnInit(): void {
    this.chart = new Chart('spendings-canvas', {
      type: 'bar',
      data: {
        labels: [
          'Aluguel',
          'Mercado',
          'Luz',
          'Internet',
          'Gás',
          'Água',
          'Faxina',
          'Inter',
          'Cama',
          'Netflix',
          'Amazon',
        ],
        datasets: [
          {
            backgroundColor: '#f59e0b40',
            borderColor: '#f59e0b90',
            borderRadius: 4,
            borderWidth: 1,
            label: 'Expectativa - Pessoa 1',
            data: [560, 210, 35, 43.75, 17.5, 21, 353.5, 84, 175, 19.56, 7],
            stack: '0',
          },
          {
            backgroundColor: '#06b6d440',
            borderColor: '#06b6d490',
            borderRadius: 4,
            borderWidth: 1,
            label: 'Expectativa - Pessoa 2',
            data: [1040, 390, 65, 81.25, 32.5, 39, 656.5, 156, 325, 36.34, 13],
            stack: '0',
          },
          {
            backgroundColor: '#f59e0b80',
            borderColor: '#f59e0b',
            borderRadius: 4,
            borderWidth: 1,
            label: 'Realidade - Pessoa 1',
            data: [660, 280, 35, 43.75, 17.5, 21, 153.5, 84, 175, 19.56, 7],
            stack: '1',
          },
          {
            backgroundColor: '#06b6d480',
            borderColor: '#06b6d4',
            borderRadius: 4,
            borderWidth: 1,
            label: 'Realidade - Pessoa 2',
            data: [1240, 190, 65, 81.25, 32.5, 39, 956.5, 156, 325, 36.34, 13],
            stack: '1',
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Gastos - Expectativas vs Realidade',
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false,
            },
          },
          y: {
            stacked: true,
            grid: {
              color: '#b0b0b025',
            },
          },
        },
      },
    });
  }
}
