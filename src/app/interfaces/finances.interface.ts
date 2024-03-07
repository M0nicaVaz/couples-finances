export interface Finance {
  id: string;
  name: string;
  value: number;
}

export type FinanceInput = Omit<Finance, 'id'>;

export interface GetFinanceResponse {
  data: Finance[];
  total: number;
}

export interface AddFinanceResponse {
  message: string;
}
