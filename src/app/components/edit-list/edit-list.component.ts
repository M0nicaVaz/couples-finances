import {Component, OnInit, signal} from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionPencil, ionTrashBin } from '@ng-icons/ionicons';
import { ButtonIconComponent } from '../button-icon/button-icon.component';
import {FinancesService} from "../../services/finances.service";
import {Finance} from "../../interfaces/finances.interface";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-edit-list',
  standalone: true,
  imports: [NgIconComponent, ButtonIconComponent, CommonModule],
  viewProviders: [provideIcons({ ionPencil, ionTrashBin })],
  templateUrl: './edit-list.component.html',
  styleUrl: './edit-list.component.scss',
  providers: [FinancesService],
})
export class EditListComponent implements OnInit{
  outcomes: Finance[] = []
  groupedOutcome: {name: string, types: {
    type: string;
    id: string;
    }[]}[] = [];
  constructor(private financesService: FinancesService) {}


  formatData(data: Finance[]) {
    data.forEach(obj => {
      const index = this.groupedOutcome.findIndex(item => item.name === obj.name);
      if (index !== -1) {
        this.groupedOutcome[index].types.push({ type: obj.type, id: obj.id });
      } else {
       this.groupedOutcome.push({ name: obj.name, types: [{ type: obj.type, id: obj.id }] });
      }
    });

  }
  ngOnInit() {
   const response = this.financesService.getOutcomes('outcomes')
    this.outcomes = response.data
    this.formatData(this.outcomes)
  }
  //   this.financesService.getOutcomes('outcome').subscribe({
  //     next: (response) => {
  //       this.outcomes = response.data;
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //   });
  // }
}
