"use client";

import TableSearch from "@/components/TableSearch";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import Tooltip from "@/components/ui/ToolTips";
import { QuotationData, role } from "@/lib/data";
import { QuotationType } from "@/types/Data.type";
import Link from "next/link";
import React, { useCallback } from "react";
import { FaFilter, FaList, FaPlus, FaRegEdit } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

const columns = [
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Reference",
    accessor: "reference",
  },
  {
    header: "Customer",
    accessor: "customer",
  },
  {
    header: "TotalPayable",
    accessor: "totalpayable",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const Quotations = () => {
  const renderRow = useCallback((item: unknown) => {
    const quotationItem = item as QuotationType;

    return (
      <tr
        key={quotationItem.id}
        className="border-b border-gray-200 even:bg-gray-100 odd:bg-outline-light text-xs sm:text-sm"
      >
        <td className="hidden md:table-cell px-2 py-2 whitespace-nowrap">
          {quotationItem.Date}
        </td>

        <td className="px-2 py-2 whitespace-nowrap">
          {quotationItem.QuotationId}
        </td>

        <td className="px-2 py-2 whitespace-nowrap">
          {quotationItem.CustomerName}
        </td>

        <td className="px-2 py-2 whitespace-nowrap">
          {quotationItem.TotalPayable?.toFixed(2)}
        </td>

        <td className="px-2 py-2">
          <div className="flex items-center gap-2">
            <Link href={`/quotations/${quotationItem.id}`}>
              <IoEyeOutline className="text-primary text-base sm:text-lg" />
            </Link>
            <Link href={`/quotations/${quotationItem.id}`}>
              <FaRegEdit className="text-success text-base sm:text-lg" />
            </Link>
            <Link href={`/quotations/${quotationItem.id}`}>
              {role === "admin" && (
                <MdDeleteOutline className="text-danger text-base sm:text-lg" />
              )}
            </Link>
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
          <h1 className="text-lg sm:text-xl font-semibold">Quotation List</h1>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
          {/* Search */}
          <div className="w-full sm:w-auto">
            <TableSearch />
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <Tooltip content="Add Quotation" position="bottom">
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

      {/* Table Wrapper */}
      <div className="mt-4 w-full overflow-x-auto">
        <Table columns={columns} renderRow={renderRow} data={QuotationData} />
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Pagination />
      </div>
    </Card>
  );
};

export default React.memo(Quotations);
