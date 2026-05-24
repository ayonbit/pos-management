"use client";

import FormModal from "@/components/FormModal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { CustomerType, SupplierType } from "@/types/Data.type";
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
} from "react-icons/fa";
import { MdAccountBalanceWallet, MdOutlinePayments } from "react-icons/md";

type Props = {
  supplier: SupplierType;
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

const SupplierDetailsClient = ({ supplier }: Props) => {
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
            href="/dashboard/suppliers"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:font-semibold transition-colors mb-6 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Supplier
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
                      {supplier.SupplierName}
                    </h1>

                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      <FaCalendarAlt size={10} />
                      {/* Since : January 15, 2024 */}
                      Since : {new Date().toLocaleDateString()}
                      {/* Have To Change at Created at */}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="font-mono bg-slate-100 px-2 py-0.5 rounded-md">
                      ID: {supplier.SupplierId}
                    </span>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-2">
                      <FaPhoneAlt size={12} />
                      <span>{supplier.Phone}</span>
                    </div>
                    {supplier.Email && (
                      <>
                        <span className="text-slate-300 hidden sm:inline">
                          •
                        </span>
                        <div className="hidden sm:flex items-center gap-2">
                          <FaEnvelope size={12} />
                          <span className="truncate max-w-50">
                            {supplier.Email}
                          </span>
                        </div>
                        <span className="text-slate-300">•</span>
                      </>
                    )}
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt size={12} />
                      <span>{supplier.Address}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons - Edit Button in Header */}
              <FormModal table="supplier" type="update" data={supplier}>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Opening Balance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <Card className="relative overflow-hidden border border-emerald-100 bg-linear-to-br from-emerald-50 to-white shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500">
                    Opening Balance
                  </p>

                  <h1 className="text-2xl font-bold text-emerald-600">
                    ৳ {supplier.Balance}
                  </h1>

                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
                    Current Balance
                  </span>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                  <MdAccountBalanceWallet
                    size={24}
                    className="text-emerald-600"
                  />
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Due Limit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <Card className="relative overflow-hidden border border-rose-100 bg-linear-to-br from-rose-50 to-white shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500">Due Limit</p>

                  <h1 className="text-2xl font-bold text-rose-600">
                    ৳ {supplier.DueLimit}
                  </h1>

                  <span className="inline-flex items-center rounded-full bg-rose-100 px-2.5 py-1 text-xs font-medium text-rose-700">
                    Credit Threshold
                  </span>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100">
                  <MdOutlinePayments size={24} className="text-rose-600" />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default SupplierDetailsClient;

