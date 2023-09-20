export class Transaction {
    id?: number;
    description: string;
    amount: number;
    date: string; // You can use a string or Date type

    constructor(description: string, amount: number, date: string) {
        this.description = description;
        this.amount = amount;
        this.date = date;
    }
}
  