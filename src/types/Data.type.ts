export type PurchaseType = {
  id: number;
  InvoiceId: string;
  Date: string;
  SupplierName: string;
  PayableAmount: number;
  PaidAmount: number;
  DueAmount: number;
};

export type SupplierType = {
  id: number;
  SupplierId: string;
  SupplierName: string;
  company: string;
  Address: string;
  Phone: string;
  Email: string;
  Balance: number;
};

export type CustomerCat = {
  id: number;
  CusCatName: string;
  CusDes: string;
  CusAmount: number;
  CusAmountOf: number;
  CusType: "Amount" | "Percentage";
  CusStatus: boolean;
};

export type CustomerType = {
  id: number;
  CustomerName: string;
  CustomerId: string;
  Address: string;
  Phone: string;
  Email?: string;
  Date: string;
  Action: boolean;
  Balance: number;
};

export type QuotationType = {
  id: number;
  CustomerName: string;
  QuotationId: string;
  TotalPayable: number;
  Date: string;
};
