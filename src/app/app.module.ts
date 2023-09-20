import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionService } from './transaction.service'; 

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TransactionListComponent,
    BudgetFormComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
