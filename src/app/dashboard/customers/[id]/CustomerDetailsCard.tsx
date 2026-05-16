"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { CustomerType } from "@/types/Data.type";
import Link from "next/link";
import {
  FaArrowLeft,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { MdCategory, MdPayments } from "react-icons/md";

type Props = {
  customer: CustomerType;
};

const CustomerDetailsPage = ({ customer }: Props) => {
  return (
    <div className="p-4 md:p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div>
            <Link href="/dashboard/customers">
              <Button size="sm" variant="outline" className="flex gap-2">
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                Back to Customers
              </Button>
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {customer.CustomerName}
            </h1>
            <span
              className={`px-2 py-1 rounded-full text-xs ${
                customer.Action
                  ? "bg-success/80 text-white"
                  : "bg-danger/80 text-white"
              }`}
            >
              {customer.Action ? "Active" : "Inactive"}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Customer ID: {customer.CustomerId}
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Info */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Customer Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                  <FaPhone size={18} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-gray-800">{customer.Phone}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-xl bg-purple-50 text-purple-600">
                  <FaEnvelope size={18} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-800">
                    {customer.Email || "N/A"}
                  </p>
                </div>
              </div>

              {/* Category */}
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-xl bg-orange-50 text-orange-600">
                  <MdCategory size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Category</p>
                  <p className="font-medium text-gray-800">
                    {customer.CustomerCategory}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-xl bg-red-50 text-red-600">
                  <FaMapMarkerAlt size={18} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium text-gray-800">
                    {customer.Address}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Summary */}
        <div>
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Account Summary
            </h2>

            <div className="space-y-5">
              {/* Balance */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-green-100 text-green-700">
                    <MdPayments size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Balance</p>
                    <p className="font-semibold text-gray-800">
                      ৳ {customer.Balance}
                    </p>
                  </div>
                </div>
              </div>

              {/* Due Limit */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50">
                <div>
                  <p className="text-sm text-gray-500">Due Limit</p>

                  <p className="font-semibold text-gray-800">
                    ৳ {customer.DueLimit}
                  </p>
                </div>
              </div>

              {/* Customer Number */}
              <div className="p-4 rounded-2xl border border-dashed border-gray-300">
                <p className="text-sm text-gray-500 mb-1">Customer Number</p>

                <p className="text-lg font-bold tracking-wide text-gray-800">
                  #{customer.id}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsPage;
