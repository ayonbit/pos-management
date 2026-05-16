"use client";

import dynamic from "next/dynamic";
import React from "react";

// Form imports
//Sales
const SalesConditionsForm = dynamic(
  () => import("../forms/Sales/ConditionsForm"),
  {
    loading: () => <p>Loading...</p>,
  },
);
//GeneralAccounts
const PartyListForm = dynamic(
  () => import("../forms/GeneralAccounts/PartyListForm"),
  {
    loading: () => <p>Loading...</p>,
  },
);
const LiabilityListForm = dynamic(
  () => import("../forms/GeneralAccounts/LiabilityListForm"),
  {
    loading: () => <p>Loading...</p>,
  },
);

const PaymentListForm = dynamic(
  () => import("../forms/GeneralAccounts/PaymentListForm"),
  {
    loading: () => <p>Loading...</p>,
  },
);

const ChartListForm = dynamic(
  () => import("../forms/GeneralAccounts/ChartListForm"),
  {
    loading: () => <p>Loading...</p>,
  },
);

const AssetsListForm = dynamic(
  () => import("../forms/GeneralAccounts/AssetsListForm"),
  {
    loading: () => <p>Loading...</p>,
  },
);

const GiListForm = dynamic(
  () => import("../forms/GeneralAccounts/GiListForm"),
  {
    loading: () => <p>Loading...</p>,
  },
);

const AccountListForm = dynamic(
  () => import("../forms/GeneralAccounts/AccountListForm"),
  {
    loading: () => <p>Loading...</p>,
  },
);

//Customer
const CustomerForm = dynamic(() => import("../forms/Customer/CustomerForm"), {
  loading: () => <p>Loading...</p>,
});
const CustomerCategoryForm = dynamic(
  () => import("../forms/Customer/CustomerCategoryForm"),
  {
    loading: () => <p>Loading...</p>,
  },
);
//Products
const ProductBrandFrom = dynamic(
  () => import("../forms/Product/ProductBrandForm"),
  {
    loading: () => <p>Loading...</p>,
  },
);

const ProductGradeForm = dynamic(
  () => import("../forms/Product/ProductGradeForm"),
  {
    loading: () => <p>Loading...</p>,
  },
);

// Form registry
export const forms: {
  [key: string]: (
    type: "create" | "update",
    data?: any,
    onClose?: () => void,
  ) => React.ReactNode;
} = {
  //Sales
  conditions: (type, data, onClose) => (
    <SalesConditionsForm type={type} data={data} onClose={onClose} />
  ),
  //General Accounts
  parties: (type, data, onClose) => (
    <PartyListForm type={type} data={data} onClose={onClose} />
  ),
  liability: (type, data, onClose) => (
    <LiabilityListForm type={type} data={data} onClose={onClose} />
  ),

  paymentMethod: (type, data, onClose) => (
    <PaymentListForm type={type} data={data} onClose={onClose} />
  ),

  accountChart: (type, data, onClose) => (
    <ChartListForm type={type} data={data} onClose={onClose} />
  ),

  assets: (type, data, onClose) => (
    <AssetsListForm type={type} data={data} onClose={onClose} />
  ),

  gi: (type, data, onClose) => (
    <GiListForm type={type} data={data} onClose={onClose} />
  ),

  accountList: (type, data, onClose) => (
    <AccountListForm type={type} data={data} onClose={onClose} />
  ),
  //Customer
  customer: (type, data, onClose) => (
    <CustomerForm type={type} data={data} onClose={onClose} />
  ),
  customerCategory: (type, data, onClose) => (
    <CustomerCategoryForm type={type} data={data} onClose={onClose} />
  ),
  //Product
  productBrand: (type, data, onClose) => (
    <ProductBrandFrom type={type} data={data} onClose={onClose} />
  ),

  productGrade: (type, data, onClose) => (
    <ProductGradeForm type={type} data={data} onClose={onClose} />
  ),
};
