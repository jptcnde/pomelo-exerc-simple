import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '../../components/AppBar';
import AppFooter from '../../components/AppFooter';
import Container from '../../components/Container';
import TransactionList from './TransactionList';
import { fetchTnxList } from './actions';
import { getTnxList } from './selectors';
import Typography from '../../components/Typography';
import styled from 'styled-components';

const Main = styled.main`
  margin-top: 16px;
`;

function TransactionStatus() {
  const dispatch = useDispatch();
  const tnxList = useSelector(getTnxList);

  useEffect(() => {
    dispatch(fetchTnxList());
  }, [dispatch]);

  return (
    <Container data-testid="app-container">
      <AppBar />
      <Main>
        <Typography variant="headline">
          Transaction Status
        </Typography>
        <br />
        <br />
        <TransactionList items={tnxList} />
      </Main>
      <AppFooter />
    </Container>
  )
}

export default TransactionStatus;