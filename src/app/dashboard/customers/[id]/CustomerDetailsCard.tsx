"use client";

import FormModal from "@/components/FormModal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { CustomerType } from "@/types/Data.type";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaEnvelope,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEdit,
  FaTag,
} from "react-icons/fa";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { IoMdCheckmarkCircle, IoMdCloseCircle } from "react-icons/io";
import { MdAccountBalanceWallet, MdOutlineTrendingUp } from "react-icons/md";

type Props = {
  customer: CustomerType;
};

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const CustomerDetailsClient = ({ customer }: Props) => {
  // Calculate credit usage
  const creditUsagePercentage = Math.min(
    100,
    (customer.Balance / customer.DueLimit) * 100,
  );
  const isOverLimit = customer.Balance > customer.DueLimit;
  const isNearLimit = creditUsagePercentage >= 80 && !isOverLimit;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100/50">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/dashboard/customers"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:font-semibold transition-colors mb-6 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Customers
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-primary/10 to-transparent rounded-3xl" />
          <motion.div
            whileHover={{ boxShadow: "0 20px 25px -12px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.2 }}
            className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/60 shadow-xl shadow-slate-200/20 p-6 md:p-8"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Customer Identity */}
              <div className="flex items-center gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
                      {customer.CustomerName}
                    </h1>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.3 }}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                        customer.Action
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-rose-50 text-rose-700 border border-rose-200"
                      }`}
                    >
                      {customer.Action ? (
                        <IoMdCheckmarkCircle size={12} />
                      ) : (
                        <IoMdCloseCircle size={12} />
                      )}
                      {customer.Action ? "Active" : "Inactive"}
                    </motion.span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      <FaTag size={10} />
                      {customer.CustomerCategory}
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      <FaCalendarAlt size={10} />
                      {/* Since : January 15, 2024 */}
                      Since : {new Date().toLocaleDateString()}
                      {/* Have To Change at Created at */}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="font-mono bg-slate-100 px-2 py-0.5 rounded-md">
                      ID: {customer.CustomerId}
                    </span>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-2">
                      <FaPhoneAlt size={12} />
                      <span>{customer.Phone}</span>
                    </div>
                    {customer.Email && (
                      <>
                        <span className="text-slate-300 hidden sm:inline">
                          •
                        </span>
                        <div className="hidden sm:flex items-center gap-2">
                          <FaEnvelope size={12} />
                          <span className="truncate max-w-50">
                            {customer.Email}
                          </span>
                        </div>
                        <span className="text-slate-300">•</span>
                      </>
                    )}
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt size={12} />
                      <span>{customer.Address}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons - Edit Button in Header */}
              <FormModal table="customer" type="update" data={customer}>
                <Button
                  variant="outline"
                  className="flex gap-2 items-center px-5 shadow-md hover:shadow-outline/50 transition-all duration-300"
                >
                  <FaRegEdit size={14} />
                  Edit Profile
                </Button>
              </FormModal>
            </div>
          </motion.div>
        </motion.div>
        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
        >
          <StatCard
            title="Current Balance"
            value={`৳ ${customer.Balance.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}`}
            icon={MdAccountBalanceWallet}
            iconBg="bg-emerald-100"
            iconColor="text-emerald-700"
            trend={`Due Limit: ৳ ${customer.DueLimit.toLocaleString()}`}
            warning={isNearLimit}
            danger={isOverLimit}
          />
          <StatCard
            title="Total Sales"
            value="৳ 50,000"
            icon={MdOutlineTrendingUp}
            iconBg="bg-blue-100"
            iconColor="text-blue-700"
            trend="+8% vs previous"
          />
          <StatCard
            title="Total Invoices"
            value="25"
            icon={HiOutlineReceiptTax}
            iconBg="bg-purple-100"
            iconColor="text-purple-700"
            trend="Last 30 days"
          />
          <StatCard
            title="Available Credit"
            value={`৳ ${(customer.DueLimit - customer.Balance).toLocaleString(
              undefined,
              {
                minimumFractionDigits: 2,
              },
            )}`}
            icon={MdAccountBalanceWallet}
            iconBg="bg-rose-100"
            iconColor="text-rose-700"
            trend="Remaining credit limit"
          />
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div variants={itemVariants}>
              <PaymentSummary customer={customer} />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div variants={itemVariants}>
              <RecentActivity />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default CustomerDetailsClient;

// Helper Components with animations
const StatCard = ({
  title,
  value,
  icon: Icon,
  iconBg,
  iconColor,
  trend,
  warning = false,
  danger = false,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  trend: string;
  warning?: boolean;
  danger?: boolean;
}) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <Card
      className={`rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 p-5 ${
        warning ? "border-amber-300 bg-amber-50/30" : ""
      } ${danger ? "border-rose-300 bg-rose-50/30" : ""}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500 font-medium">{title}</p>
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className={`text-2xl font-bold mt-2 tracking-tight ${
              danger ? "text-rose-600" : "text-slate-800"
            }`}
          >
            {value}
          </motion.p>
          <p className="text-xs text-slate-400 mt-2">{trend}</p>
        </div>
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center ${iconColor} text-xl`}
        >
          <Icon />
        </motion.div>
      </div>
      {warning && !danger && (
        <div className="mt-3 flex items-center gap-2 text-xs text-amber-600 bg-amber-50 p-2 rounded-lg">
          <FaExclamationTriangle size={12} />
          <span>Approaching due limit</span>
        </div>
      )}
      {danger && (
        <div className="mt-3 flex items-center gap-2 text-xs text-rose-600 bg-rose-50 p-2 rounded-lg">
          <FaExclamationTriangle size={12} />
          <span>Exceeded due limit!</span>
        </div>
      )}
    </Card>
  </motion.div>
);

const RecentActivity = () => {
  const activities = [
    {
      type: "invoice" as const,
      title: "Invoice Created",
      description: "Invoice #INV-1025 generated for test order",
      time: "2 hours ago",
      amount: "৳ 5,000",
    },
    {
      type: "payment" as const,
      title: "Payment Received",
      description: "Payment of ৳ 10,000 received via Bank Transfer",
      time: "Yesterday",
      amount: "+ ৳ 10,000",
      isPositive: true,
    },
    {
      type: "invoice" as const,
      title: "Invoice Created",
      description: "Invoice #INV-1024 generated for test order",
      time: "Jan 22, 2024",
      amount: "৳ 3,500",
    },
    {
      type: "payment" as const,
      title: "Payment Received",
      description: "Payment of ৳ 7,500 received via Cash",
      time: "Jan 20, 2024",
      amount: "+ ৳ 7,500",
      isPositive: true,
    },
  ];

  return (
    <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-800">
              Recent Activity
            </h2>
            <p className="text-sm text-slate-500 mt-0.5">
              Latest transactions and updates
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full text-slate-600"
            >
              View All
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="divide-y divide-slate-100">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
          >
            <ActivityItem {...activity} />
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

const ActivityItem = ({
  type,
  title,
  description,
  time,
  amount,
  isPositive = false,
}: {
  type: "invoice" | "payment";
  title: string;
  description: string;
  time: string;
  amount: string;
  isPositive?: boolean;
}) => {
  const typeConfig = {
    invoice: {
      bg: "bg-blue-100",
      text: "text-blue-700",
      icon: "INV",
    },
    payment: {
      bg: "bg-emerald-100",
      text: "text-emerald-700",
      icon: "PAY",
    },
  };
  const config = typeConfig[type];
  return (
    <div className="p-5 hover:bg-slate-50/80 transition-colors">
      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-10 h-10 rounded-xl ${config.bg} flex items-center justify-center ${config.text} text-xs font-bold`}
        >
          {config.icon}
        </motion.div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
            <h3 className="font-semibold text-slate-800">{title}</h3>
            <span className="text-xs text-slate-400 whitespace-nowrap">
              {time}
            </span>
          </div>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
        <motion.p
          whileHover={{ scale: 1.05 }}
          className={`text-sm font-semibold whitespace-nowrap ${
            isPositive ? "text-emerald-600" : "text-slate-700"
          }`}
        >
          {amount}
        </motion.p>
      </div>
    </div>
  );
};

const PaymentSummary = ({ customer }: { customer: CustomerType }) => {
  const creditUsagePercentage = Math.min(
    100,
    (customer.Balance / customer.DueLimit) * 100,
  );
  const isOverLimit = customer.Balance > customer.DueLimit;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-lg font-semibold text-slate-800">
            Payment Summary
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.div
              whileHover={{ y: -2 }}
              className="bg-slate-50 rounded-xl p-4 text-center"
            >
              <p className="text-sm text-slate-500">Total Paid</p>
              <p className="text-2xl font-bold text-slate-800 mt-1">৳ 48,000</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              className="bg-slate-50 rounded-xl p-4 text-center"
            >
              <p className="text-sm text-slate-500">Due Limit</p>
              <p className="text-2xl font-bold text-amber-600 mt-1">
                ৳ {customer.DueLimit.toLocaleString()}
              </p>
            </motion.div>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${creditUsagePercentage}%` }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className={`h-full rounded-full ${
                isOverLimit
                  ? "bg-linear-to-r from-rose-500 to-rose-400"
                  : "bg-linear-to-r from-emerald-500 to-emerald-400"
              }`}
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xs text-slate-400 text-center mt-3"
          >
            {isOverLimit
              ? `⚠️ Exceeded due limit by ৳ ${(customer.Balance - customer.DueLimit).toLocaleString()}`
              : `${Math.round(creditUsagePercentage)}% of due limit used`}
          </motion.p>
        </div>
      </Card>
    </motion.div>
  );
};
