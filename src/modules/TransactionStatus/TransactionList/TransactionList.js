import React from 'react';
import PropTypes from 'prop-types';
import Table, { TableCell, TableHead } from '../../../components/Table';
import Button from '../../../components/Button';
import columns from './tblConfig';
import { refundTnx } from '../actions';
import { useDispatch } from 'react-redux';
import {
  STATUSES,
} from '../../../constants';

const [
  ,CONFIRMED,,REFUNDED,CANCELLED
] = STATUSES;

const headers = columns.map(col => col.header);

function TransactionList(props) {
  const {
    items,
  } = props;

  const dispatch = useDispatch();

  function handleRefund(tnx) {
    dispatch(refundTnx(tnx));
  }

  const renderCell = (dataItem) => columns.map(column => {
    const { id, render, styles } = column;
    const { status } = dataItem;
    if (id === 'action') {
      return (
        <TableCell key={id}>
          <Button
            disabled={[CONFIRMED,REFUNDED,CANCELLED].includes(status)}
            onClick={() => handleRefund(dataItem)}>
            Refund
          </Button>
        </TableCell>
      )
    }

    const cell = typeof render === 'function'
      ? render(dataItem[id], dataItem)
      : dataItem[id]

    return (
      <TableCell key={id} styles={styles}>
        {cell}
      </TableCell>
    )
  });


  return (
    <Table>
      <TableHead>
        <tr>
          {headers.map(header => (
            <TableCell key={header} as="th">
              {header}
            </TableCell>
          ))}
        </tr>
      </TableHead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            {renderCell(item)}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

TransactionList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
}

export default TransactionList;