"use client";

import FormModal from "@/components/FormModal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import Tooltip from "@/components/ui/ToolTips";
import { PaymentMethodData, role } from "@/lib/data";
import { PaymentMethodType } from "@/types/Data.type";
import React, { useCallback } from "react";
import { FaList, FaPlus } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const columns = [
  { header: "Serial", accessor: "serial" },
  { header: "Payment Method", accessor: "payment" },
  { header: "Status", accessor: "status" },
  { header: "Actions", accessor: "action" },
];

const PaymentMethod = () => {
  const renderRow = useCallback((item: PaymentMethodType) => {
    const paymentMethodItem = item;

    return (
      <tr
        key={paymentMethodItem.id}
        className="border-b border-gray-200 even:bg-gray-100 odd:bg-outline-light text-xs sm:text-sm"
      >
        <td className="px-2 py-2 whitespace-nowrap">{paymentMethodItem.id}</td>
        <td className="px-2 py-2">{paymentMethodItem.MethodName}</td>
        <td className="hidden md:table-cell px-2 py-2 whitespace-nowrap">
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              paymentMethodItem.status
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {paymentMethodItem.status ? "Active" : "Inactive"}
          </span>
        </td>

        <td className="px-2 py-2">
          <div className="flex items-center gap-2 whitespace-nowrap">
            {role === "admin" && (
              <Tooltip content="Delete" position="bottom">
                <FormModal
                  table="paymentMethod"
                  type="delete"
                  id={paymentMethodItem.id}
                  data={PaymentMethodData.find(
                    (pay) => pay.id === paymentMethodItem.id,
                  )}
                >
                  <MdDeleteOutline className="text-danger text-base sm:text-lg" />
                </FormModal>
              </Tooltip>
            )}
          </div>
        </td>
      </tr>
    );
  }, []);

  return (
    <Card>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
        {/* Title */}
        <div className="flex items-center gap-3">
          <FaList size={22} />
          <h1 className="text-lg sm:text-xl font-semibold">
            Payment Method List
          </h1>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
          {/* Buttons */}
          <div className="flex gap-2">
            <Tooltip content="Add Payment Method" position="left">
              <FormModal type="create" table="paymentMethod">
                <Button size="sm" className="flex items-center gap-1 px-3">
                  <FaPlus size={12} />
                </Button>
              </FormModal>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Table Wrapper for Mobile Scroll */}
      <div className="mt-4 w-full overflow-x-auto">
        <Table
          columns={columns}
          renderRow={renderRow}
          data={PaymentMethodData}
        />
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Pagination />
      </div>
    </Card>
  );
};

export default React.memo(PaymentMethod);
