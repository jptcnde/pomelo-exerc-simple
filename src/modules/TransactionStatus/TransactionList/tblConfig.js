import React from 'react';
import Typography from '../../../components/Typography';
import TransactionStatusIndicator from './TransactionStatusIndicator';

export default [
  {
    header: 'Initiator',
    id: 'initiatorDetails',
    render: ({
      contactEmail, contactName,
    }) => (
      <>
        <Typography>
          <b>{contactName}</b>
        </Typography>
        <Typography variant="caption">
          {contactEmail}
        </Typography>
      </>
    ),
    styles: { width: 250 },
  },
  {
    id: 'provider',
    header: 'Provider',
    render: (provider) => String(provider).toUpperCase(),
    styles: { width: 150 },
  },
  {
    id: 'currency',
    header: 'Currency',
    styles: { width: 100 },
  },
  {
    id: 'amount',
    header: 'Amount',
    styles: { width: 120 },
  },
  {
    id: 'statusDisplay',
    header: 'Status',
    styles: { width: 200 },
    render: (statusDisplay, { status }) => (
      <TransactionStatusIndicator status={status} statusDisplay={statusDisplay} />
    )
  },
  {
    id: 'action',
    styles: { width: 60 },
    header: 'Action'
  }
]