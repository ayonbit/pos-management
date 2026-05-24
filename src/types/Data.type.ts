export type SalaryListDataType = {
  id: number;
  year: number;
  month: string;
  netSalary: number;
};

export type EmployeeAdvanceType = {
  id: number;
  EmployeeName: string;
  Date: string;
  AdvancedAmount: number;
};

export type HolidayListType = {
  id: number;
  title: string;
  date: string;
};

export type EmployeesListType = {
  id: number;
  employeeId: string;
  employeeNid: number;
  employeeName: string;
  employeeDesignation: string;
  employeePhone: string;
  employeeAddress: string;
  employeeEmail: string;
  employeeSalary: number;
  employeeJoiningDate: Date;
};

export type FundTransferType = {
  id: number;
  Date: string;
  AccountFrom: number;
  AccountTo: number;
  Amount: number;
  ReferenceNo: number;
  Comment: string;
};
export type PartyType = {
  id: number;
  PartyId: string;
  PartyName: string;
  Address?: string;
  Phone: string;
  Email?: string;
};

export type LiabilityListType = {
  id: number;
  LiabilityName: string;
  Description: string;
  OpeningBalance: number;
  CurrentBalance: number;
};

export type AssetsListType = {
  id: number;
  AssetName: string;
  Description: string;
  OpeningBalance: number;
  CurrentBalance: number;
};
export type PaymentMethodType = {
  id: number;
  MethodName: string;
  status: boolean;
};

export type ChartAccountType = {
  id: number;
  ChartAccountName: string;
  GiAccount: string;
  HeadType: string;
  Status: boolean;
};
export type GeneralAccountListType = {
  id: number;
  AccountName: string;
};
export type AccountListType = {
  id: number;
  AccountNo: string;
  AccountName: string;
  BankName: string;
  BranchName: string;
  OpeningBalance: number;
  status: boolean;
  default: boolean;
};

export type SalesConditionsType = {
  id: number;
  salesConditions: string;
};

export type ReturnType = {
  id: number;
  InvoiceId: string;
  Date: string;
  CustomerName: string;
  Reference: string;
  Comment: string;
  Amount: number;
};

export type SalesType = {
  id: number;
  InvoiceId: string;
  Date: string;
  CustomerName: string;
  PayableAmount: number;
  PaidAmount: number;
  DueAmount: number;
};

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
  DueLimit: number;
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
  Action: boolean;
  Balance: number;
  CustomerCategory: string;
  DueLimit: number;
};

export type QuotationType = {
  id: number;
  CustomerName: string;
  QuotationId: string;
  TotalPayable: number;
  Date: string;
};
