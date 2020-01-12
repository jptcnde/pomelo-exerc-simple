import numbro from 'numbro';
import { STATUSES_DISPLAY } from '../../constants';

export function getTnxItem(tnxItem) {
  const {
    amount,
    currency,
    state: status,
    providerDisplayName,
    provider,
    initiatorDetails,
    created,
    updated,
    id,
  } = tnxItem;

  return {
    amount: numbro(amount).format({
      thousandSeparated: true,
      mantissa: 2
    }),
    currency,
    provider,
    providerDisplayName,
    status,
    statusDisplay: STATUSES_DISPLAY[status],
    initiatorDetails,
    created,
    updated,
    id,
  };
}

export const getTnxList = state => state.tnxList.map(getTnxItem);

export const getTnxFetching = state => state.fetching;
