import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transactions', component: TransactionListComponent },
  { path: 'add-transaction', component: BudgetFormComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
