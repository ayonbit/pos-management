import {
  FaBitcoin,
  FaBook,
  FaCartPlus,
  FaListOl,
  FaPlus,
  FaProductHunt,
  FaRegMoneyBillAlt,
  FaTruck,
  FaUser,
} from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { LuRefreshCcw } from "react-icons/lu";

import { MenuItem } from "@/types/Menu.types";
import {
  MdDashboard,
  MdEmail,
  MdOutlineCalendarMonth,
  MdOutlineFileUpload,
  MdOutlineHolidayVillage,
  MdOutlineSettingsSuggest,
  MdPeople,
  MdQrCode2,
  MdSettings,
  MdShoppingCart,
} from "react-icons/md";
import { TiArrowLoop } from "react-icons/ti";

export const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: MdDashboard,
  },
  {
    label: "Quotations",
    icon: FaListOl,
    children: [
      {
        label: "Manage Quotations",
        href: "/dashboard/quotations",
        icon: FaListOl,
      },
      {
        label: "Add Quotations",
        href: "/dashboard/quotations/create",
        icon: FaPlus,
      },
    ],
  },
  {
    label: "Sales",
    icon: MdShoppingCart,
    children: [
      { label: "New Sale", href: "/dashboard/sales/add", icon: FaPlus },
      { label: "Sales List", href: "/dashboard/sales", icon: FaListOl },
      {
        label: "Collection",
        href: "/dashboard/sales/due",
        icon: FaRegMoneyBillAlt,
      },
      { label: "Package Sale", href: "/dashboard/sales/package", icon: FaPlus },
      {
        label: "Sales Return",
        href: "/dashboard/sales/return",
        icon: TiArrowLoop,
      },
    ],
  },
  {
    label: "Purchase",
    icon: FaCartPlus,
    children: [
      { label: "Purchase List", href: "/dashboard/purchase", icon: FaListOl },
      {
        label: "Individual Purchase",
        href: "/dashboard/purchase/add",
        icon: FaPlus,
      },
      {
        label: "Supplier Wise Purchase",
        href: "/dashboard/purchase/swp-create",
        icon: FaPlus,
      },
      {
        label: "Bulk Purchase",
        href: "/dashboard/purchase/bulk-create",
        icon: FaPlus,
      },
      {
        label: "Payment",
        href: "/dashboard/purchase/payment",
        icon: FaRegMoneyBillAlt,
      },
      {
        label: "Purchase Return",
        href: "/dashboard/purchase/return",
        icon: FaPlus,
      },
      {
        label: "Purchase Return Received",
        href: "/dashboard/purchase/rtn-received",
        icon: FaPlus,
      },
    ],
  },
  {
    label: "General Accounts",
    icon: FaRegMoneyBillAlt,
    children: [
      { label: "Accounts", href: "/dashboard/general", icon: FaListOl },
      {
        label: "GI Accounts",
        href: "/dashboard/general/accounts-gi",
        icon: FaListOl,
      },
      {
        label: "Chart of Accounts",
        href: "/dashboard/general/accounts-chart",
        icon: FaListOl,
      },
      {
        label: "Company Assets",
        href: "/dashboard/general/accounts-assets",
        icon: FaListOl,
      },
      {
        label: "Company Liability",
        href: "/dashboard/general/accounts-liablity",
        icon: FaListOl,
      },
      {
        label: "Parties",
        href: "/dashboard/general/accounts-parties",
        icon: FaListOl,
      },
      {
        label: "Debit Voucher (Expense)",
        href: "/dashboard/general/accounts-debitvoucher",
        icon: FaPlus,
      },
      {
        label: "Credit Voucher (Income)",
        href: "/dashboard/general/accounts-creditvoucher",
        icon: FaPlus,
      },
      {
        label: "Add Assets",
        href: "/dashboard/general/accounts-addassets",
        icon: FaPlus,
      },
      {
        label: "Add Liability",
        href: "/dashboard/general/accounts-addliablity",
        icon: FaPlus,
      },
      {
        label: "Fund Transfer",
        href: "/dashboard/general/accounts-transfer",
        icon: FaPlus,
      },
    ],
  },
  {
    label: "Payroll",
    icon: FaBitcoin,
    children: [
      {
        label: "Payroll Setup",
        href: "/dashboard/payroll",
        icon: FaRegMoneyBillAlt,
      },
      {
        label: "Employees",
        href: "/dashboard/payroll/employees",
        icon: IoPeople,
      },
      {
        label: "Attendance",
        href: "/dashboard/payroll/attendance",
        icon: IoPeople,
      },
      {
        label: "Holiday",
        href: "/dashboard/payroll/holiday",
        icon: MdOutlineHolidayVillage,
      },
      {
        label: "Advance",
        href: "/dashboard/payroll/advance",
        icon: FaRegMoneyBillAlt,
      },
      {
        label: "Salary Generate",
        href: "/dashboard/payroll/generate",
        icon: FaRegMoneyBillAlt,
      },
      {
        label: "Salary List",
        href: "/dashboard/payroll",
        icon: FaRegMoneyBillAlt,
      },
    ],
  },
  {
    label: "Products",
    icon: FaProductHunt,
    children: [
      { label: "Product List", href: "/dashboard/product", icon: FaListOl },
      { label: "Add", href: "/dashboard/product/add", icon: FaPlus },
      {
        label: "Upload Product by CSV",
        href: "/dashboard/product/create-csv",
        icon: MdOutlineFileUpload,
      },
      { label: "Manage Unit", href: "/dashboard/product/unit", icon: FaListOl },
      {
        label: "Manage Brand",
        href: "/dashboard/product/brand",
        icon: FaListOl,
      },
      {
        label: "Manage Category",
        href: "/dashboard/product/category",
        icon: FaListOl,
      },
      {
        label: "Manage Sub Category",
        href: "/dashboard/product/subcategory",
        icon: FaListOl,
      },
      {
        label: "Manage Warehouse",
        href: "/dashboard/product/warehouse",
        icon: FaListOl,
      },
      {
        label: "Manage Barcode",
        href: "/dashboard/product/barcode",
        icon: FaListOl,
      },
      {
        label: "Update Price",
        href: "/dashboard/product/update",
        icon: FaListOl,
      },
      {
        label: "Product Package",
        href: "/dashboard/product/package",
        icon: FaListOl,
      },
      {
        label: "Product Damage",
        href: "/dashboard/product/damage",
        icon: FaListOl,
      },
      {
        label: "Customer Product Pricing",
        href: "/dashboard/product/customerpricing",
        icon: FaListOl,
      },
    ],
  },
  {
    label: "Stock Transfer",
    icon: FaTruck,
    children: [
      {
        label: "Warehouse Transfer",
        href: "/dashboard/warehouse",
        icon: FaListOl,
      },
    ],
  },
  {
    label: "Stock Adjustment",
    icon: FaTruck,
    children: [
      { label: "Manage Stock", href: "/dashboard/managestock", icon: FaListOl },
    ],
  },
  {
    label: "Suppliers",
    icon: MdPeople,
    children: [
      {
        label: "Manage Supplier",
        href: "/dashboard/suppliers",
        icon: FaListOl,
      },
      { label: "Add Supplier", href: "/dashboard/suppliers/add", icon: FaPlus },
      {
        label: "Upload Supplier by CSV",
        href: "/dashboard/suppliers/upload",
        icon: MdOutlineFileUpload,
      },
    ],
  },
  {
    label: "Customers",
    icon: IoPeople,
    children: [
      {
        label: "Manage Customer",
        href: "/dashboard/customers",
        icon: FaListOl,
      },
      { label: "Add Customer", href: "/dashboard/customers/add", icon: FaPlus },
      {
        label: "Upload Customer by CSV",
        href: "/dashboard/customers/upload",
        icon: MdOutlineFileUpload,
      },
      {
        label: "Customer Category",
        href: "/dashboard/customers/category",
        icon: MdOutlineSettingsSuggest,
      },
    ],
  },
  {
    label: "Reports",
    icon: FaBook,
    children: [
      { label: "All Reports", href: "/dashboard/reports", icon: FaBook },
      {
        label: "Today's Report",
        href: "/dashboard/reports/today",
        icon: MdOutlineCalendarMonth,
      },
      {
        label: "Weekly Report",
        href: "/dashboard/reports/week",
        icon: MdOutlineCalendarMonth,
      },
      {
        label: "Monthly Report",
        href: "/dashboard/reports/monthly",
        icon: MdOutlineCalendarMonth,
      },
    ],
  },
  {
    label: "Settings",
    icon: MdSettings,
    children: [
      {
        label: "Software Settings",
        href: "/dashboard/settings",
        icon: FaListOl,
      },
      {
        label: "Manage Companies",
        href: "/dashboard/settings/managecompanies",
        icon: FaListOl,
      },
      {
        label: "SMS APIs",
        href: "/dashboard/settings/smsapis",
        icon: FaListOl,
      },
      {
        label: "Make Group",
        href: "/dashboard/settings/makegroup",
        icon: FaListOl,
      },
      {
        label: "Junk Clean",
        href: "/dashboard/settings/junk",
        icon: LuRefreshCcw,
      },
    ],
  },
  {
    label: "Users",
    icon: FaUser,
    children: [
      { label: "Manage User", href: "/dashboard/user", icon: FaListOl },
      { label: "User Roles", href: "/dashboard/user/roles", icon: FaListOl },
    ],
  },
  {
    label: "SMS",
    icon: MdEmail,
    children: [{ label: "Send Sms", href: "/dashboard/sms", icon: FaPlus }],
  },
  {
    label: "QR Code",
    icon: MdQrCode2,
    href: "/dashboard/qrgenerate",
  },
];
