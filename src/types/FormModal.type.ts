export interface FormModalProps {
  table:
    | "quotation"
    | "product"
    | "sale"
    | "customer"
    | "supplier"
    | "employee";
  type: "view" | "create" | "update" | "delete";
  data?: any;
  id?: number;
  onSuccess?: () => void;
}
