export interface IExpense {
    $key?: string;
    name: string;
    category: string;
    description: string;
    createdAt: number;
}

export class Expense implements IExpense {
    name: string;
    category: string;
    description: string;
    createdAt: number = Firebase.ServerValue.TIMESTAMP;

    constructor(name: string, category: string, description: string, createdAt: number) {
        this.name = name;
        this.category = category;
        this.description = description;
        this.createdAt = createdAt;
    }
}