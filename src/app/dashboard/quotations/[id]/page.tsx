"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { CustomerData, QuotationData } from "@/lib/data";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaDownload,
  FaEnvelope,
  FaFileInvoice,
  FaIdBadge,
  FaPhoneAlt,
  FaPrint,
  FaRegEdit,
  FaUser,
} from "react-icons/fa";
import { MdAttachMoney, MdReceipt, MdSend } from "react-icons/md";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
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

const QuotationDetails = () => {
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);
  const [showActions, setShowActions] = useState(false);

  const quotation = QuotationData.find((q) => q.id === id);

  if (!quotation) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100/50">
        <Card className="p-10 text-center rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-5xl mb-4">📄</div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">
            Quotation Not Found
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            The quotation you're looking for doesn't exist.
          </p>
          <Link href="/dashboard/quotations">
            <Button variant="primary">Back to Quotations</Button>
          </Link>
        </Card>
      </div>
    );
  }

  // Find customer details from CustomerData
  const customerInfo = CustomerData.find(
    (c) => c.CustomerName === quotation.CustomerName,
  );

  // Mock line items for the quotation
  const lineItems = [
    {
      id: 1,
      product: "Product A",
      description: "Standard product description",
      quantity: 2,
      unitPrice: 250,
      total: 500,
    },
    {
      id: 2,
      product: "Product B",
      description: "Premium variant with extra features",
      quantity: 1,
      unitPrice: 750,
      total: 750,
    },
    {
      id: 3,
      product: "Service Fee",
      description: "Installation & setup service",
      quantity: 1,
      unitPrice: 200,
      total: 200,
    },
  ];

  const subtotal = lineItems.reduce((sum, item) => sum + item.total, 0);
  const discountPercent = 5;
  const discountAmount = (subtotal * discountPercent) / 100;
  const taxPercent = 10;
  const taxAmount = ((subtotal - discountAmount) * taxPercent) / 100;
  const grandTotal = subtotal - discountAmount + taxAmount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100/50">
      <div className="mx-auto max-w-5xl px-4 py-6">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/dashboard/quotations"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:font-semibold transition-colors mb-6 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Quotations
          </Link>
        </motion.div>

        {/* Header */}
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
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-hover shadow-lg shadow-primary/20">
                  <FaFileInvoice className="text-2xl text-white" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
                      {quotation.QuotationId}
                    </h1>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <MdReceipt size={12} />
                      Active
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <FaCalendarAlt size={12} />
                    <span>Issued: {quotation.Date}</span>
                    <span className="text-slate-300">•</span>
                    <FaUser size={12} />
                    <span>{quotation.CustomerName}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1.5"
                >
                  <FaPrint size={14} />
                  <span className="hidden sm:inline">Print</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1.5"
                >
                  <FaDownload size={14} />
                  <span className="hidden sm:inline">PDF</span>
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  className="flex items-center gap-1.5 shadow-md shadow-primary/25"
                >
                  <MdSend size={14} />
                  <span className="hidden sm:inline">Send</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
        >
          <motion.div whileHover={{ y: -4 }}>
            <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium">
                    Total Amount
                  </p>
                  <p className="text-2xl font-bold text-slate-800 mt-1">
                    ৳ {quotation.TotalPayable.toFixed(2)}
                  </p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-primary-light flex items-center justify-center text-primary">
                  <MdAttachMoney size={24} />
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div whileHover={{ y: -4 }}>
            <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium">Customer</p>
                  <p className="text-lg font-bold text-slate-800 mt-1 truncate">
                    {quotation.CustomerName}
                  </p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600">
                  <FaUser size={20} />
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div whileHover={{ y: -4 }}>
            <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium">
                    Valid Until
                  </p>
                  <p className="text-lg font-bold text-slate-800 mt-1">
                    {(() => {
                      const d = new Date(quotation.Date);
                      d.setDate(d.getDate() + 15);
                      return d.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      });
                    })()}
                  </p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                  <FaCalendarAlt size={20} />
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Customer Info */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100">
                  <h2 className="text-lg font-semibold text-slate-800">
                    Customer Details
                  </h2>
                </div>
                <div className="p-5 space-y-4">
                  <ContactRow
                    icon={FaUser}
                    label="Name"
                    value={quotation.CustomerName}
                  />
                  <ContactRow
                    icon={FaIdBadge}
                    label="Customer ID"
                    value={customerInfo?.CustomerId || "N/A"}
                  />
                  <ContactRow
                    icon={FaPhoneAlt}
                    label="Phone"
                    value={customerInfo?.Phone || "N/A"}
                  />
                  <ContactRow
                    icon={FaEnvelope}
                    label="Email"
                    value={customerInfo?.Email || "N/A"}
                    isLink
                  />
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Items Table */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100">
                  <h2 className="text-lg font-semibold text-slate-800">
                    Quotation Items
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-100 bg-slate-50/50">
                        <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">
                          #
                        </th>
                        <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">
                          Product / Service
                        </th>
                        <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3 hidden md:table-cell">
                          Description
                        </th>
                        <th className="text-center text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">
                          Qty
                        </th>
                        <th className="text-right text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">
                          Price
                        </th>
                        <th className="text-right text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {lineItems.map((item, index) => (
                        <motion.tr
                          key={item.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.08 }}
                          whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                          className="transition-colors"
                        >
                          <td className="px-5 py-4 text-sm text-slate-400 font-mono">
                            {String(index + 1).padStart(2, "0")}
                          </td>
                          <td className="px-5 py-4 text-sm font-medium text-slate-700">
                            {item.product}
                          </td>
                          <td className="px-5 py-4 text-sm text-slate-500 hidden md:table-cell">
                            {item.description}
                          </td>
                          <td className="px-5 py-4 text-center text-sm text-slate-600">
                            {item.quantity}
                          </td>
                          <td className="px-5 py-4 text-right text-sm text-slate-600">
                            ৳{item.unitPrice.toFixed(2)}
                          </td>
                          <td className="px-5 py-4 text-right text-sm font-semibold text-slate-700">
                            ৳{item.total.toFixed(2)}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Totals */}
                <div className="border-t border-slate-100 px-5 py-4 space-y-2 ml-auto w-full md:w-72">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Subtotal</span>
                    <span className="font-medium text-slate-700">
                      ৳{subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">
                      Discount ({discountPercent}%)
                    </span>
                    <span className="font-medium text-red-500">
                      - ৳{discountAmount.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Tax ({taxPercent}%)</span>
                    <span className="font-medium text-slate-700">
                      + ৳{taxAmount.toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t border-slate-200 pt-3 flex items-center justify-between">
                    <span className="text-base font-bold text-slate-800">
                      Grand Total
                    </span>
                    <span className="text-xl font-extrabold text-primary">
                      ৳{grandTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Footer actions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-between gap-4 flex-wrap"
            >
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1.5"
                >
                  <FaRegEdit size={14} />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1.5 text-red-500 border-red-200 hover:bg-red-50"
                >
                  <MdReceipt size={14} />
                  Cancel
                </Button>
              </div>
              <Button
                variant="primary"
                size="sm"
                className="flex items-center gap-1.5 shadow-md shadow-primary/25"
              >
                <MdSend size={14} />
                Send to Customer
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotationDetails;

// Helper component
const ContactRow = ({
  icon: Icon,
  label,
  value,
  isLink = false,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  isLink?: boolean;
}) => (
  <motion.div whileHover={{ x: 4 }} className="flex items-center gap-3 group">
    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-primary-light group-hover:text-primary transition-all duration-200">
      <Icon size={14} />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-xs text-slate-400">{label}</p>
      {isLink ? (
        <a
          href={`mailto:${value}`}
          className="text-sm font-medium text-primary hover:underline truncate block"
        >
          {value}
        </a>
      ) : (
        <p className="text-sm font-medium text-slate-700 truncate">{value}</p>
      )}
    </div>
  </motion.div>
);
