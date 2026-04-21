export type ProductType = {
  id: number;
  SupplierName: string;
  ProductName: string;
  ProductCode: string;
  Brand: string;
  Category: string;
  SubCategory: string;
  Generic: string;
  ProductUnit: string;
  ProductGrade: string;
  ProductDescription: string;
  ProductImage: string;
  PurchasePrice: number;
  SalesPrice: number;
  AlertQuantity: number;
  ReferenceNo: string;
  Discount: number;
  OpeningQuantity: number;
  SKU: number;
  BoxQuantity: number;
};

export type ProductBrandType = {
  id: number;
  brandName: string;
  brandCode: string;
  status: boolean;
};

export type ProductGradeType = {
  id: number;
  grade: string;
  description: string;
  status: boolean;
};

export type ProductUnitType = {
  id: number;
  unitName: string;
  description: string;
  status: boolean;
};
