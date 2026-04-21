"use client";

import TableSearch from "@/components/TableSearch";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import Tooltip from "@/components/ui/ToolTips";
import { FundTransferData, role } from "@/lib/data";
import { FundTransferType } from "@/types/Data.type";
import Link from "next/link";
import React, { useCallback } from "react";
import { FaFilter, FaList, FaPlus, FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const columns = [
  { header: "Date", accessor: "date" },
  { header: "Account From", accessor: "faccount" },
  { header: "Account To", accessor: "taccount" },
  { header: "Amount", accessor: "amount" },
  { header: "Reference No", accessor: "reference" },
  { header: "Comment", accessor: "comment", className: "hidden md:table-cell" },
  { header: "Actions", accessor: "action" },
];

const FundTransferPage = () => {
  const renderRow = useCallback((item: unknown) => {
    const fundTransferItem = item as FundTransferType;

    return (
      <tr
        key={fundTransferItem.id}
        className="border-b border-gray-200 even:bg-gray-100 odd:bg-outline-light text-xs sm:text-sm"
      >
        <td className="px-2 py-2 whitespace-nowrap">{fundTransferItem.Date}</td>

        <td className="px-2 py-2 whitespace-nowrap">
          {fundTransferItem.AccountFrom}
        </td>

        <td className="px-2 py-2 whitespace-nowrap">
          {fundTransferItem.AccountTo}
        </td>
        <td className="px-2 py-2 whitespace-nowrap">
          {fundTransferItem.Amount.toFixed(2)}
        </td>

        <td className="px-2 py-2 whitespace-nowrap">
          {fundTransferItem.ReferenceNo}
        </td>

        <td className="hidden md:table-cell px-2 py-2 whitespace-nowrap">
          {fundTransferItem.Comment}
        </td>

        <td className="px-2 py-2">
          <div className="flex items-center gap-2">
            <Link href={`/quotations/${fundTransferItem.id}`}>
              <FaRegEdit className="text-success text-base sm:text-lg" />
            </Link>
            <Link href={`/quotations/${fundTransferItem.id}`}>
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
          <h1 className="text-lg sm:text-xl font-semibold">
            Fund Transfer List
          </h1>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
          {/* Search */}
          <div className="w-full sm:w-auto">
            <TableSearch />
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <Tooltip content="Add Transfer" position="bottom">
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
        <Table
          columns={columns}
          renderRow={renderRow}
          data={FundTransferData}
        />
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Pagination />
      </div>
    </Card>
  );
};

export default React.memo(FundTransferPage);
