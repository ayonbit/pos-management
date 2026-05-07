export interface FormModalProps {
  table:
    | "quotation"
    | "product"
    | "sales"
    | "customer"
    | "supplier"
    | "employee"
    | "customerCategory"
    | "productBrand"
    | "productGrade"
    | "productUnit"
    | "accountList";

  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
  onSuccess?: () => void;
}
