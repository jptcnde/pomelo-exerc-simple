import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../../components/Typography';
import { STATUS_COLORS } from '../../../constants';

const StatusIndicator = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: ${({ bgcolor }) => bgcolor };
  display: inline-block;
  content: ' ';
`;

const Container = styled.div`
  display: inline-flex;
  align-items: center;
`;

function TransactionStatus(props) {
  const { status, statusDisplay } = props;
  return (
    <Container>
      <StatusIndicator bgcolor={STATUS_COLORS[status]} />
      &nbsp;
      &nbsp;
      <Typography
        color={STATUS_COLORS[status]}
        variant="caption">
        {statusDisplay}
      </Typography>
    </Container>
  );
}

TransactionStatus.propTypes = {
  status: PropTypes.string.isRequired,
  statusDisplay: PropTypes.string.isRequired,
};

export default TransactionStatus;