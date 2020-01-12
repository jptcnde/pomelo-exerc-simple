export const STATUSES = [
  'INITIATED',
  'CONFIRMED',
  'QR_CODE_GENERATED',
  'REFUNDED',
  'CANCELLED',
];

const [
  INITIATED,
  CONFIRMED,
  QR_CODE_GENERATED,
  REFUNDED,
  CANCELLED,
] = STATUSES;

export const STATUSES_DISPLAY = {
  [INITIATED]: 'Initiated',
  [CONFIRMED]: 'Confirmed',
  [QR_CODE_GENERATED]: 'QR Generated',
  [REFUNDED]: 'Refunded',
  [CANCELLED]: 'Cancelled',
}

export const STATUS_COLORS = {
  [INITIATED]: '#ffc107',
  [CONFIRMED]: '#4caf50',
  [QR_CODE_GENERATED]: '#03a9f4',
  [REFUNDED]: '#ff5722',
  [CANCELLED]: '#f44336',
}