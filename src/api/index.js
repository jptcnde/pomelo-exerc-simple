import {
  STATUSES
} from '../constants';

const API_ENDPOINT = 'http://localhost:4800';
const [,,, REFUNDED ] = STATUSES;
/** TNX -> Transaction */

export function getTnx() {
  return fetch(`${API_ENDPOINT}/transactions`)
  .then(res => res.json())
}

export function getTnxById(id) {
  return fetch(`${API_ENDPOINT}/transactions/${id}`)
  .then(res => res.json())
}


export async function refundTnx(id) {
  const { history = [] } = await getTnxById(id);

  history.push({
    state: REFUNDED,
    updatedDate: new Date().toISOString(), // client side for this demo
    trigger: 'SYSTEM',
  })

  const bodyParams = {
    history,
    state: REFUNDED
  };
  const req = {
    method: 'PATCH',
    body: JSON.stringify(bodyParams),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  };

  return fetch(`${API_ENDPOINT}/transactions/${id}`, req)
}