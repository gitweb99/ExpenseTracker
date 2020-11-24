import React,{ useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
//import { Transaction } from './Transaction';

export const IncomeExpense = () => {
    
    const { transactions } = useContext(GlobalContext);

    const amounts=transactions.map(transaction => (transaction.amount))
    //const total = amounts.reduce((acc,item)=>(acc += item), 0).toFixed(2);

    const income=amounts 
    .filter(item => item > 0)
    .reduce((acc,item)=> (acc +=item),0 )
    .toFixed(2);

    const expense=Math.abs(amounts 
    .filter(item => item < 0)
    .reduce((acc,item)=> (acc +=item),0 )*-1).toFixed(2);

    return (
        <div className="styleAccount">

        <div>
            <h4>Income</h4>
            <p className="money plus">
            {income}
            </p>
        </div>

        <div>
        <h4>Expense</h4>
            <p  className="money minus">
                {expense}
            </p>
        </div>

    </div>
    )
}
