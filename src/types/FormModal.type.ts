export interface FormModalProps {
  table:
    | "quotation"
    //SalesSection
    | "sales"
    |"conditions"
    //CustomerSection
    | "customer"
    | "customerCategory"
    | "supplier"
    | "employee"
    //ProductSection
    | "product"
    | "productBrand"
    | "productGrade"
    | "productUnit"
    //GeneralAccountSection
    | "accountList"
    | "gi"
    | "accountChart"
    | "assets"
    | "paymentMethod"
    | "liability"
    | "parties"
    | "fundTransfer";

  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
  onSuccess?: () => void;
}
