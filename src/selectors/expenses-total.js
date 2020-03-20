export default (expenses)=>{
    if (expenses) {
        return expenses.map(expense=>expense.amount).reduce((prev, curr)=> prev + curr, 0);
    } else
        return 0;
};

