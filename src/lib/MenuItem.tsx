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
  FaUserCog,
} from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { LuRefreshCcw } from "react-icons/lu";

import { MenuItem } from "@/types/Menu.types";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaMoneyBillTransfer, FaPeoplePulling } from "react-icons/fa6";
import { FcAlphabeticalSortingAz } from "react-icons/fc";
import { GiExpense, GiTakeMyMoney } from "react-icons/gi";
import { GoPackageDependencies } from "react-icons/go";
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import {
  MdAccountBalanceWallet,
  MdBarcodeReader,
  MdBrowserUpdated,
  MdDashboard,
  MdDashboardCustomize,
  MdEmail,
  MdOutlineCalendarMonth,
  MdOutlineFileUpload,
  MdOutlineHolidayVillage,
  MdOutlineMoneyOff,
  MdOutlineSettingsSuggest,
  MdOutlineTypeSpecimen,
  MdPeople,
  MdQrCode2,
  MdSettings,
  MdShoppingCart,
} from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";
import { RiFileDamageFill } from "react-icons/ri";
import { SiBrandfolder } from "react-icons/si";
import { TbAirConditioning, TbCategory2, TbCategoryPlus } from "react-icons/tb";
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
      {
        label: "Sales Conditions",
        href: "/dashboard/sales/conditions",
        icon: TbAirConditioning,
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
      {
        label: "Accounts",
        href: "/dashboard/accounts",
        icon: MdAccountBalanceWallet,
      },
      {
        label: "GI Accounts",
        href: "/dashboard/accounts/gi",
        icon: HiMiniBuildingLibrary,
      },
      {
        label: "Chart of Accounts",
        href: "/dashboard/accounts/charts",
        icon: GiExpense,
      },
      {
        label: "Company Assets",
        href: "/dashboard/accounts/assets",
        icon: GiTakeMyMoney,
      },
      {
        label: "Payment Method",
        href: "/dashboard/accounts/payments",
        icon: CiMoneyCheck1,
      },
      {
        label: "Company Liability",
        href: "/dashboard/accounts/liability",
        icon: MdOutlineMoneyOff,
      },
      {
        label: "Parties",
        href: "/dashboard/accounts/parties",
        icon: FaPeoplePulling,
      },
      {
        label: "Fund Transfer",
        href: "/dashboard/accounts/transfer",
        icon: FaMoneyBillTransfer,
      },
      {
        label: "Debit Voucher (Expense)",
        href: "/dashboard/accounts/debitvoucher",
        icon: FaPlus,
      },
      {
        label: "Credit Voucher (Income)",
        href: "/dashboard/accounts/creditvoucher",
        icon: FaPlus,
      },
      {
        label: "Add Assets",
        href: "/dashboard/accounts/addassets",
        icon: FaPlus,
      },
      {
        label: "Add Liability",
        href: "/dashboard/accounts/addliablity",
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
        href: "/dashboard/payroll/salary",
        icon: FaRegMoneyBillAlt,
      },
    ],
  },
  {
    label: "Products",
    icon: FaProductHunt,
    children: [
      { label: "Product List", href: "/dashboard/products", icon: FaListOl },

      { label: "Add Products", href: "/dashboard/products/add", icon: FaPlus },
      {
        label: "Upload Product by CSV",
        href: "/dashboard/products/uploadcsv",
        icon: MdOutlineFileUpload,
      },
      {
        label: "Manage Unit",
        href: "/dashboard/products/units",
        icon: AiOutlineDeploymentUnit,
      },
      {
        label: "Manage Grade",
        href: "/dashboard/products/grades",
        icon: MdOutlineTypeSpecimen,
      },

      {
        label: "Manage Brand",
        href: "/dashboard/products/brands",
        icon: SiBrandfolder,
      },
      {
        label: "Manage Category",
        href: "/dashboard/products/categories",
        icon: TbCategoryPlus,
      },
      {
        label: "Manage Sub Category",
        href: "/dashboard/products/subcategories",
        icon: TbCategory2,
      },
      {
        label: "Manage Generics",
        href: "/dashboard/products/generics",
        icon: FcAlphabeticalSortingAz,
      },
      {
        label: "Manage Barcode",
        href: "/dashboard/products/barcode",
        icon: MdBarcodeReader,
      },
      {
        label: "Update Price",
        href: "/dashboard/products/updateprice",
        icon: MdBrowserUpdated,
      },
      {
        label: "Product Package",
        href: "/dashboard/products/package",
        icon: GoPackageDependencies,
      },
      {
        label: "Product Damage",
        href: "/dashboard/products/damages",
        icon: RiFileDamageFill,
      },
      {
        label: "Customer Product Pricing",
        href: "/dashboard/products/customprice",
        icon: MdDashboardCustomize,
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
      {
        label: "Manage User",
        href: "/dashboard/users/manage",
        icon: PiUserListBold,
      },
      { label: "User Roles", href: "/dashboard/users/roles", icon: FaUserCog },
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
