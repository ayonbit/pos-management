"use client";

import FormModal from "@/components/FormModal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { EmployeesListType } from "@/types/Data.type";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaEnvelope,
  FaIdBadge,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEdit,
  FaUserTag,
} from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";
import { MdAttachMoney, MdCalendarMonth, MdWork } from "react-icons/md";

type Props = {
  employee: EmployeesListType;
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

const EmployeeDetailsCard = ({ employee }: Props) => {
  // Format joining date
  const joinDate = new Date(employee.employeeJoiningDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

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
            href="/dashboard/payroll/employees"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:font-semibold transition-colors mb-6 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Employees
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
              {/* Employee Identity */}
              <div className="flex items-center gap-6">
                {/* Avatar */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                  className="w-16 h-16 rounded-2xl bg-linear-to-br from-primary to-primary-hover flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-primary/20 shrink-0"
                >
                  {employee.employeeName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                    .slice(0, 2)}
                </motion.div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
                      {employee.employeeName}
                    </h1>

                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                      <FaUserTag size={10} />
                      {employee.employeeDesignation}
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      <FaCalendarAlt size={10} />
                      Since : {joinDate}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-500 flex-wrap">
                    <span className="font-mono bg-slate-100 px-2 py-0.5 rounded-md">
                      ID: {employee.employeeId}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="font-mono bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md">
                      NID: {employee.employeeNid}
                    </span>
                    <span className="text-slate-300 hidden sm:inline">•</span>
                    <div className="hidden sm:flex items-center gap-2">
                      <FaPhoneAlt size={12} />
                      <span>{employee.employeePhone}</span>
                    </div>
                    {employee.employeeEmail && (
                      <>
                        <span className="text-slate-300 hidden lg:inline">
                          •
                        </span>
                        <div className="hidden lg:flex items-center gap-2">
                          <FaEnvelope size={12} />
                          <span className="truncate max-w-50">
                            {employee.employeeEmail}
                          </span>
                        </div>
                      </>
                    )}
                    <span className="text-slate-300 hidden lg:inline">•</span>
                    <div className="hidden lg:flex items-center gap-2">
                      <FaMapMarkerAlt size={12} />
                      <span className="truncate max-w-50">
                        {employee.employeeAddress}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons - Edit Button in Header */}
              <FormModal table="employees" type="update" data={employee}>
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
            title="Current Salary"
            value={`৳ ${employee.employeeSalary.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}`}
            icon={MdAttachMoney}
            iconBg="bg-emerald-100"
            iconColor="text-emerald-700"
            trend="Monthly gross salary"
          />
          <StatCard
            title="Designation"
            value={employee.employeeDesignation}
            icon={MdWork}
            iconBg="bg-blue-100"
            iconColor="text-blue-700"
            trend="Current position"
          />
          <StatCard
            title="Joining Date"
            value={joinDate}
            icon={MdCalendarMonth}
            iconBg="bg-purple-100"
            iconColor="text-purple-700"
            trend="Employment started"
          />
          <StatCard
            title="Employee NID"
            value={String(employee.employeeNid)}
            icon={HiIdentification}
            iconBg="bg-rose-100"
            iconColor="text-rose-700"
            trend="National ID number"
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
              <ContactInformation employee={employee} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <SalarySummary employee={employee} />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div variants={itemVariants}>
              <SalaryHistory />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EmployeeDetailsCard;

// Helper Components with animations
const StatCard = ({
  title,
  value,
  icon: Icon,
  iconBg,
  iconColor,
  trend,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  trend: string;
}) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500 font-medium">{title}</p>
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold mt-2 tracking-tight text-slate-800"
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
    </Card>
  </motion.div>
);

const ContactInformation = ({ employee }: { employee: EmployeesListType }) => {
  return (
    <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="p-5 border-b border-slate-100">
        <h2 className="text-lg font-semibold text-slate-800">
          Contact Information
        </h2>
      </div>
      <div className="p-5 space-y-4">
        <ContactRow
          icon={FaPhoneAlt}
          label="Phone"
          value={employee.employeePhone}
        />
        <ContactRow
          icon={FaEnvelope}
          label="Email"
          value={employee.employeeEmail || "—"}
          isLink
        />
        <ContactRow
          icon={FaMapMarkerAlt}
          label="Address"
          value={employee.employeeAddress}
        />
        <ContactRow
          icon={FaIdBadge}
          label="NID Number"
          value={String(employee.employeeNid)}
        />
      </div>
    </Card>
  );
};

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

const SalarySummary = ({ employee }: { employee: EmployeesListType }) => {
  const annualSalary = employee.employeeSalary * 12;
  const monthlySalary = employee.employeeSalary;

  return (
    <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="p-5 border-b border-slate-100">
        <h2 className="text-lg font-semibold text-slate-800">Salary Summary</h2>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div
            whileHover={{ y: -2 }}
            className="bg-emerald-50 rounded-xl p-4 text-center border border-emerald-100"
          >
            <p className="text-sm text-slate-500">Monthly Salary</p>
            <p className="text-xl font-bold text-emerald-600 mt-1">
              ৳ {monthlySalary.toLocaleString()}
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -2 }}
            className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100"
          >
            <p className="text-sm text-slate-500">Annual Salary</p>
            <p className="text-xl font-bold text-blue-600 mt-1">
              ৳ {annualSalary.toLocaleString()}
            </p>
          </motion.div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">Designation</span>
            <span className="font-semibold text-slate-700">
              {employee.employeeDesignation}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">Employee ID</span>
            <span className="font-mono font-semibold text-slate-700">
              {employee.employeeId}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">Joined</span>
            <span className="font-semibold text-slate-700">
              {new Date(employee.employeeJoiningDate).toLocaleDateString(
                "en-US",
                { year: "numeric", month: "short", day: "numeric" },
              )}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

const SalaryHistory = () => {
  const salaryData = [
    {
      month: "January",
      year: 2025,
      amount: 45000,
      status: "Paid" as const,
    },
    {
      month: "February",
      year: 2025,
      amount: 45000,
      status: "Paid" as const,
    },
    {
      month: "March",
      year: 2025,
      amount: 45000,
      status: "Paid" as const,
    },
    {
      month: "April",
      year: 2025,
      amount: 45000,
      status: "Paid" as const,
    },
    {
      month: "May",
      year: 2025,
      amount: 45000,
      status: "Pending" as const,
    },
    {
      month: "June",
      year: 2025,
      amount: 45000,
      status: "Upcoming" as const,
    },
  ];

  return (
    <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="p-5 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-800">
              Salary History
            </h2>
            <p className="text-sm text-slate-500 mt-0.5">
              Monthly salary records
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
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50">
              <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">
                Month
              </th>
              <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">
                Year
              </th>
              <th className="text-right text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">
                Amount
              </th>
              <th className="text-center text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {salaryData.map((item, index) => (
              <motion.tr
                key={`${item.month}-${item.year}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                className="transition-colors"
              >
                <td className="px-5 py-3.5 text-sm font-medium text-slate-700">
                  {item.month}
                </td>
                <td className="px-5 py-3.5 text-sm text-slate-500">
                  {item.year}
                </td>
                <td className="px-5 py-3.5 text-sm font-semibold text-slate-700 text-right">
                  ৳ {item.amount.toLocaleString()}
                </td>
                <td className="px-5 py-3.5 text-center">
                  <StatusBadge status={item.status} />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

const StatusBadge = ({
  status,
}: {
  status: "Paid" | "Pending" | "Upcoming";
}) => {
  const config = {
    Paid: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-200",
      dot: "bg-emerald-500",
    },
    Pending: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      border: "border-amber-200",
      dot: "bg-amber-500",
    },
    Upcoming: {
      bg: "bg-slate-100",
      text: "text-slate-600",
      border: "border-slate-200",
      dot: "bg-slate-400",
    },
  };

  const style = config[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${style.bg} ${style.text} ${style.border}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
      {status}
    </span>
  );
};
