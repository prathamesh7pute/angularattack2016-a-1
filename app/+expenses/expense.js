"use strict";
var Expense = (function () {
    function Expense(name, category, description, createdAt) {
        this.createdAt = Firebase.ServerValue.TIMESTAMP;
        this.name = name;
        this.category = category;
        this.description = description;
        this.createdAt = createdAt;
    }
    return Expense;
}());
exports.Expense = Expense;
//# sourceMappingURL=expense.js.map