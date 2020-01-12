import {
  TNX_FETCH_SUCCESS,
  TNX_REFUND_SUCCESS,

  TNX_FETCH,
  TNX_REFUND,
  TNX_FETCH_FAILURE,
  TNX_REFUND_FAILURE,
} from './actions';

export const initialState = {
  tnxList: [],
  count: 0,
  error: false,
  fetching: false,
};

export default function tnxHistoryReducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case TNX_FETCH:
    case TNX_REFUND:
      return {
        ...state,
        error: false,
        fetching: true,
      };
    case TNX_FETCH_FAILURE:
    case TNX_REFUND_FAILURE:
      return {
        ...state,
        fetching: true,
        error: true,
      }
    case TNX_FETCH_SUCCESS:
      return {
        ...state,
        count: action.tnxList ? action.tnxList.length : 0,
        tnxList: action.tnxList,
        error: false,
        fetching: false
      };
    case TNX_REFUND_SUCCESS:
      return {
        ...state,
        error: false,
        fetching: false
      }
    default:
      return state;
  }
}