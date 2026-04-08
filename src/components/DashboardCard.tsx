"use client";

import Card from "@/components/ui/Card";
import { motion } from "framer-motion";

import { BsFillJournalBookmarkFill } from "react-icons/bs";
import {
  FaCalendarAlt,
  FaRegCalendarMinus,
  FaShoppingCart,
} from "react-icons/fa";
import { FaMoneyBillTrendUp, FaRegMessage } from "react-icons/fa6";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { PiNoteDuotone } from "react-icons/pi";

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
    },
  }),
};

const DashboardCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2"> 
      {[
        {
          title: "Today",
          icon: <FaCalendarAlt size={26} />,
          content: (
            <>
              <p className="italic text-sm">Sale : 0.00 TK</p>
              <p className="text-xs text-gray-500 italic">Compared to Today</p>
              <p className="text-center text-sm mt-2">Purchase : 0.00 TK</p>
            </>
          ),
        },
        {
          title: "Yesterday",
          icon: <FaRegCalendarMinus size={26} />,
          content: (
            <>
              <p className="italic text-sm">Sale : 0.00 TK</p>
              <p className="text-xs text-gray-500 italic">
                Compared to Yesterday
              </p>
              <p className="text-center text-sm mt-2">Purchase : 0.00 TK</p>
            </>
          ),
        },
        {
          title: "Monthly",
          icon: <IoCalendarNumberSharp size={26} />,
          content: (
            <>
              <p className="italic text-sm">Sale : 0.00 TK</p>
              <p className="text-xs text-gray-500 italic">
                Compared to Monthly
              </p>
              <p className="text-center text-sm mt-2">Purchase : 0.00 TK</p>
            </>
          ),
        },
        {
          title: "Today",
          icon: <FaMoneyBillTrendUp size={26} />,
          content: (
            <>
              <p className="italic text-sm">Income : 0.00 TK</p>
              <p className="text-xs text-gray-500 italic">Compared to Today</p>
              <p className="text-center text-sm mt-2">Expense : 0.00 TK</p>
            </>
          ),
        },
        {
          title: "Sales Info",
          icon: <FaShoppingCart size={26} />,
          content: (
            <>
              <p className="italic text-sm">Income : 0.00 TK</p>
              <p className="italic text-sm">Expense : 0.00 TK</p>
            </>
          ),
        },
        {
          title: "Liabilities (Due)",
          icon: <BsFillJournalBookmarkFill size={26} />,
          content: (
            <>
              <p className="italic text-sm">Payable : 0.00 TK</p>
              <p className="italic text-sm">Receivable : 0.00 TK</p>
            </>
          ),
        },
        {
          title: "SMS Info",
          icon: <FaRegMessage size={26} />,
          content: (
            <>
              <p className="italic text-sm">Balance : 0.00 TK</p>
              <p className="italic text-sm">Credit Limit : 0.00 TK</p>
            </>
          ),
        },
        {
          title: "Available Amount",
          icon: <PiNoteDuotone size={26} />,
          content: (
            <>
              <p className="italic text-sm">Sale : 0.00 TK</p>
              <p className="text-xs text-gray-500 italic">
                Compared to Monthly
              </p>
            </>
          ),
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={i}
        >
          <Card>
            {/* HEADER */}
            <div className="flex justify-between items-center">
              <h1 className="text-base sm:text-lg font-semibold">
                {item.title}
              </h1>
              {item.icon}
            </div>

            {/* BODY */}
            <div className="flex flex-col gap-2 mt-3 px-1">{item.content}</div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default DashboardCard;
