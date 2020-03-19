import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense object', ()=>{
    const action = removeExpense({id: '1234abc'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1234abc'
    });
});

test('Should setup edit expense action object',()=>{
    const expense = {
        description: 'desc',
        note: 'note', 
        amount: 500,
        createdAt: 50040
    }
    const action = editExpense('123asd', expense);

    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123asd',
        updates: expense
    });
});

test('Should setup add expense object action with provide value', ()=>{
    const expense = {
        description: 'desc',
        amount: 100,
        createdAt: 10000,
        note: 'note'
    };
    const action = addExpense(expense);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expense,
            id:expect.any(String)
        }
        
    });
});

test('Should setup add expense object action with default value', ()=>{
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0
        }
    })
});