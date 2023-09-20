import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the Transaction type here
interface Transaction {
  description: string;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private apiUrl = 'http://localhost:8080/api'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  // Define methods for interacting with your back-end API here

  // Example method to get transactions
  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/transactions`);
  }

  // Example method to add a transaction
  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.apiUrl}/transactions`, transaction);
  }
}
