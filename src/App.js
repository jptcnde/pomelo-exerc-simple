import React from 'react';

import TransactionStatus from './modules/TransactionStatus';
import Loading from './components/Loading/Loading';
import { useSelector } from 'react-redux';
import { getTnxFetching } from './modules/TransactionStatus/selectors';

function App() {

  const fetching = useSelector(getTnxFetching);
  return (
    <>
      <TransactionStatus />
      {fetching && <Loading />}
    </>
  );
}

export default App;
