export const TNX_FETCH = 'tnx/fetch';
export const TNX_FETCH_SUCCESS = 'tnx/fetch/success';
export const TNX_FETCH_FAILURE = 'tnx/fetch/failure';

export const TNX_REFUND = 'tnx/refund';
export const TNX_REFUND_SUCCESS = 'tnx/refund/success';
export const TNX_REFUND_FAILURE = 'tnx/refund/failure';

export const setTnxList = (tnxList) => ({
  type: TNX_FETCH_SUCCESS,
  tnxList,
});

export const fetchTnxList = () => ({
  type: TNX_FETCH,
})

export const refundTnx = (tnx) => ({
  type: TNX_REFUND,
  tnx,
})