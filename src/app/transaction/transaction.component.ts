import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction.model';
import { TransactionService } from '../transaction.service';
import { BudgetFormComponent } from '../budget-form/budget-form.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions: Transaction[] = [];
  selectedTransaction: Transaction = new Transaction('', 0, ''); // Provide default values

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.fetchTransactions();
  }

  fetchTransactions() {
    this.transactionService.getAllTransactions().subscribe((data) => {
      this.transactions = data;
      console.log(this.transactions);
    });
  }

  addTransaction() {
    this.transactionService.addTransaction(this.selectedTransaction).subscribe(() => {
      this.fetchTransactions();
      this.selectedTransaction = new Transaction('', 0, ''); // Clear the form
    });
  }

  editTransaction(transaction: Transaction) {
    this.selectedTransaction = { ...transaction };
  }

  // updateTransaction() {
  //   this.transactionService.updateTransaction(this.selectedTransaction.id, this.selectedTransaction).subscribe(() => {
  //     this.fetchTransactions();
  //     this.selectedTransaction = new Transaction('', 0, ''); // Clear the form
  //   });
  // }

  updateTransaction() {
    if (this.selectedTransaction.id !== undefined) {
      this.transactionService.updateTransaction(this.selectedTransaction.id, this.selectedTransaction).subscribe(() => {
        this.fetchTransactions();
        this.selectedTransaction = new Transaction('', 0, ''); // Clear the form
      });
    } else {
      // Handle the case where this.selectedTransaction.id is undefined
      console.error('Transaction ID is undefined. Cannot update.');
      // This can be an error state or some other logic, depending on your app's requirements
    }
  }

  // deleteTransaction(id: number) {
  //   this.transactionService.deleteTransaction(id).subscribe(() => {
  //     this.fetchTransactions();
  //   });
  // }

  deleteTransaction(id: number | undefined) {
    if (id !== undefined) {
      this.transactionService.deleteTransaction(id).subscribe(() => {
        this.fetchTransactions();
      });
    } else {
      // Handle the case where id is undefined, e.g., display an error message
      console.error('Cannot delete transaction: ID is undefined');
    }
  }
  
}
