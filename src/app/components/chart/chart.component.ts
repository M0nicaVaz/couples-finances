import { CommonModule, getLocaleMonthNames } from '@angular/common';
import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
})
export class ChartComponent implements OnInit {
  months = getLocaleMonthNames('pt', 1, 1);
  chart: any;
  bgColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)',
  ];
  borderColors = [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)',
  ];

  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.months.map((month) => month),
        datasets: [
          {
            backgroundColor: '#f59e0b80',
            borderColor: '#f59e0b',
            borderRadius: 4,
            borderWidth: 1,
            label: 'Pessoa 1',
            data: [1280, 1500, 1500],
          },
          {
            backgroundColor: '#06b6d480',
            borderColor: '#06b6d4',
            borderRadius: 4,
            borderWidth: 1,
            label: 'Pessoa 2',
            data: [2200, 2600, 2600],
          },
        ],
      },
      options: {
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
              color: '#b0b0b015',
            },
          },
        },
      },
    });
  }
}
