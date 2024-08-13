import React from 'react'
import './Widgetlg.css'
import { transactions } from '../../data'

export default function WidgetLg() {

    const Button=({type})=>{
        return <button className={'widgetlgButton'+type}>{type}</button>
    }
  return (
    <div className='widgetlg'>
<h3 className="widgetlgTitle">Latest TransAction</h3>
<table className="widgetlgTable">
    <tr className="widgetlgTr">
        <th className="widgetlgTh">Customer </th>
        <th className="widgetlgTh"> Date</th>
        <th className="widgetlgTh">Amount </th>
        <th className="widgetlgTh"> Status</th>
    </tr>
    {transactions.map((transaction)=>(
         <tr className="widgetlgTr" key={transaction.id}>
         <td className="widgetlgUser">
             <img src={transaction.img} className='widgetlgimg' />
             <span className='widgetlgName'>{transactions.customer}</span>
         </td>
         <td className="widgetlgDate">
             {transaction.date}
         </td>
         <td className="widgetlgAmount">
             ${transaction.amount}
         </td>
         <td className="widgetlgStatus"style={{border:"none",color:"blue"}}>
             <Button type={transaction.status} />
         </td>
     </tr>
    ))}
   
   
</table>
    </div>
  )
}
