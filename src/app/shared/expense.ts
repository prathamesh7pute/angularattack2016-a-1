export interface IExpense {
    $key?: string;
    name: string;
    category: string;
    amount: number;
    description: string;
    createdAt: number;
}

export class Expense implements IExpense {
    name: string;
    category: string;
    amount: number;
    description: string;
    createdAt: number = Firebase.ServerValue.TIMESTAMP;

    constructor(name: string, category: string, amount: number, description: string, createdAt: number) {
        this.name = name;
        this.category = category;
        this.amount = amount;
        this.description = description;
        this.createdAt = createdAt;
    }
}