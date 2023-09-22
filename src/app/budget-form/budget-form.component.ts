import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Transaction } from '../transaction.model';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';


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

  constructor(private budgetService: BudgetService, private http: HttpClient) {}

  // onSubmit() {
  //   this.budgetService.addTransaction(this.transaction).subscribe((response) => {
  //     console.log('Transaction added:', response);
  //     // Clear the form or perform other actions as needed
  //   });
  // }
  
  addTransaction(transaction: Transaction): Observable<Transaction> {
    const url = 'http://localhost:8080/api/transactions'; // Replace with your backend URL
    return this.http.post<Transaction>(url, transaction).pipe(
      catchError((error) => {
        console.error('Error adding transaction:', error);
        return throwError(error);
      })
    );
  }

  onSubmit() {
    this.budgetService.addTransaction(this.transaction).subscribe((response) => {
      // Handle success or error responses as needed
      console.log('Transaction added:', response);
      // Clear the form or perform other actions as needed
      this.transaction = {
        description: '',
        amount: 0,
        date: '' // No need to manually set this
      };
    });
    console.log('Form submitted with data:', this.transaction);
  }
  
}
