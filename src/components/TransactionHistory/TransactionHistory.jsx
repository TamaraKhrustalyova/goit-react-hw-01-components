import PropTypes from 'prop-types';
import {Table, TableTitleEl, TableData, TableRow} from './TransactionHistory.styled'

export const TransactionHistory = ({transactions}) => {
    return (
    <Table>
    <thead>
      <tr>
        <TableTitleEl>Type</TableTitleEl>
        <TableTitleEl>Amount</TableTitleEl>
        <TableTitleEl>Currency</TableTitleEl>
      </tr>
    </thead>
  
    <tbody>
      {transactions.map(({id, type, amount, currency}) => {
        return <TableRow key={id}>
                    <TableData>{type}</TableData>
                    <TableData>{amount}</TableData>
                    <TableData>{currency}</TableData>
                </TableRow>
             })}  
    </tbody>
    </Table>
)};