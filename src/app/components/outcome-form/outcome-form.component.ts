import { Component, signal } from '@angular/core';
import { FinancesService } from '../../services/finances.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionTrendingDown } from '@ng-icons/ionicons';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-outcome-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIconComponent],
  viewProviders: [provideIcons({ ionTrendingDown })],
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

  onSubmit() {
    this.loading.set(true);
    console.log(this.outcomeForm.value);

    // if (this.outcomeForm.valid) {
    //   this.financesService
    //     .addOutcome('outcome', this.outcomeForm.value)
    //     .subscribe({
    //       next: (response) => {
    //         console.log(response);
    //         this.outcomeForm.reset();
    //         this.loading.set(false);
    //       },
    //       error: (error) => console.log(error),
    //     });
    // }
  }
}
