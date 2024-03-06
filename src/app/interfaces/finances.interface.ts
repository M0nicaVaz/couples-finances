export interface Finance {
  id: string;
  name: string;
  value: number;
}

export interface GetFinanceResponse {
  data: Finance[];
  total: number;
}

export interface AddFinanceResponse {
  message: string;
}
