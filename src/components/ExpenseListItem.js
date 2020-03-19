import React from 'react';
import { Link } from 'react-router-dom';
// Export a stateless functional component
// description, amount, createdAt

const ExpenseListItem = ({id,description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>Amount: {amount} - Create At: {createdAt}</p>
       
    </div>
);

export default ExpenseListItem;

