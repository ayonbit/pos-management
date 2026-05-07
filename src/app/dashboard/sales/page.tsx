"use client";

import FormModal from "@/components/FormModal";
import TableSearch from "@/components/TableSearch";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import Tooltip from "@/components/ui/ToolTips";
import { role, SalesData } from "@/lib/data";
import { SalesType } from "@/types/Data.type";
import Link from "next/link";
import React, { useCallback } from "react";
import { FaFilter, FaList, FaPlus } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

const columns = [
  { header: "Invoice Id", accessor: "invoice" },
  { header: "Date", accessor: "date" },
  { header: "Customer Name", accessor: "customer" },
  { header: "Payable Amount", accessor: "payamount" },
  { header: "Paid Amount", accessor: "paidamount" },
  { header: "Due Amount", accessor: "dueamount" },
  { header: "Actions", accessor: "action" },
];

const SalesPage = () => {
  const renderRow = useCallback((item: unknown) => {
    const salesItem = item as SalesType;

    return (
      <tr
        key={salesItem.id}
        className="border-b border-gray-200 even:bg-gray-100 odd:bg-outline-light text-xs sm:text-sm"
      >
        <td className="px-2 py-2 whitespace-nowrap">{salesItem.InvoiceId}</td>
        <td className="px-2 py-2 whitespace-nowrap">{salesItem.Date}</td>
        <td className="px-2 py-2 whitespace-nowrap">
          {salesItem.CustomerName}
        </td>
        <td className="px-2 py-2 whitespace-nowrap">
          {salesItem.PayableAmount.toFixed(2)}
        </td>
        <td className="px-2 py-2 whitespace-nowrap">
          {salesItem.PaidAmount.toFixed(2)}
        </td>
        <td className="px-2 py-2 whitespace-nowrap">{salesItem.DueAmount}</td>

        <td className="px-2 py-2">
          <div className="flex items-center gap-2">
            <Link href={`/dashboard/sales/${salesItem.id}`}>
              <IoEyeOutline
                size={16}
                className="text-primary text-base sm:text-lg"
              />
            </Link>
            <Link href={`/dashboard/sales/${salesItem.id}`}>
              <FaDownload
                size={16}
                className="text-success text-base sm:text-lg"
              />
            </Link>
            {role === "admin" && (
              <Tooltip content="Delete" position="bottom">
                <FormModal table="sales" type="delete" id={salesItem.id}>
                  <MdDeleteOutline
                    size={16}
                    className="text-danger text-base sm:text-lg"
                  />
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
            Sales Information
          </h1>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
          {/* Search full width on mobile */}
          <div className="w-full sm:w-auto">
            <TableSearch />
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <Tooltip content="Add Sales" position="bottom">
              <Button size="sm" className="flex items-center gap-1 px-3">
                <FaPlus size={12} />
              </Button>
            </Tooltip>

            <Tooltip content="Filter" position="bottom">
              <Button size="sm" className="flex items-center gap-1 px-3">
                <FaFilter size={12} />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Table Wrapper for Mobile Scroll */}
      <div className="mt-4 w-full overflow-x-auto">
        <Table columns={columns} renderRow={renderRow} data={SalesData} />
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Pagination />
      </div>
    </Card>
  );
};

export default React.memo(SalesPage);
