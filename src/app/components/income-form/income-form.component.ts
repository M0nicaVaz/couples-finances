import { Component, signal } from '@angular/core';
import { FinancesService } from '../../services/finances.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionTrendingUp, ionClose } from '@ng-icons/ionicons';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-income-form',
  standalone: true,
  templateUrl: './income-form.component.html',
  imports: [ReactiveFormsModule, NgIconComponent, ButtonComponent],
  viewProviders: [provideIcons({ ionTrendingUp, ionClose })],
  providers: [FinancesService],
})
export class IncomeFormComponent {
  incomeForm: FormGroup;
  loading = signal(false);

  constructor(private financesService: FinancesService) {
    this.incomeForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
    });
  }

  onCancel() {
    this.incomeForm.reset();
  }

  onSubmit() {
    this.loading.set(true);

    // if (this.incomeForm.valid) {
    //   this.financesService
    //     .addIncome('outcome', this.incomeForm.value)
    //     .subscribe({
    //       next: (response) => {
    //         console.log(response);
    //         this.incomeForm.reset();
    //         this.loading.set(false);
    //       },
    //       error: (error) => {
    //         this.loading.set(false);
    //         console.log(error);
    //       },
    //     });
    // }
  }
}
