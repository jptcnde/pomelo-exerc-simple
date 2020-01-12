import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '../../components/AppBar';
import AppFooter from '../../components/AppFooter';
import Container from '../../components/Container';
import TransactionList from './TransactionList';
import { fetchTnxList } from './actions';
import { getTnxList } from './selectors';

function TransactionHistory() {
  const dispatch = useDispatch();
  const tnxList = useSelector(getTnxList);

  useEffect(() => {
    dispatch(fetchTnxList());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <main>
        <TransactionList items={tnxList} />
      </main>
      <AppFooter />
    </Container>
  )
}

export default TransactionHistory;