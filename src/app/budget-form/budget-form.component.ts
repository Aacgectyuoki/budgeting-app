import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Transaction } from '../transaction.model';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent {
  transaction: Transaction = {
    description: '',
    amount: 0,
    date: ''
  };

  constructor(private budgetService: BudgetService) {}

  onSubmit() {
    this.budgetService.addTransaction(this.transaction).subscribe((response) => {
      console.log('Transaction added:', response);
      // Clear the form or perform other actions as needed
    });
  }
}
