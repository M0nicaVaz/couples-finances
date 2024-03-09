import { Component, signal } from '@angular/core';
import { FinancesService } from '../../services/finances.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionTrendingDown, ionClose } from '@ng-icons/ionicons';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-outcome-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIconComponent, ButtonComponent],
  viewProviders: [provideIcons({ ionTrendingDown, ionClose })],
  templateUrl: './outcome-form.component.html',
  providers: [FinancesService],
})
export class OutcomeFormComponent {
  outcomeForm: FormGroup;
  loading = signal(false);

  constructor(private financesService: FinancesService) {
    this.outcomeForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
    });
  }

  onCancel() {
    this.outcomeForm.reset();
  }

  onSubmit() {
    this.loading.set(true);

    if (this.outcomeForm.valid) {
      this.financesService
        .addOutcome('outcome', this.outcomeForm.value)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.outcomeForm.reset();
            this.loading.set(false);
          },
          error: (error) => {
            this.loading.set(false);
            console.log(error);
          },
        });
    }
  }
}
