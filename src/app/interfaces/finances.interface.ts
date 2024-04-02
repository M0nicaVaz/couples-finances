export interface Finance {
  id: string;
  name: string;
  value: number;
  type: string;
  createdAt: string;
}

export type FinanceInput = Omit<Finance, 'id'>;

export interface GetFinanceResponse {
  data: Finance[];
}

export interface AddFinanceResponse {
  message: string;
}
