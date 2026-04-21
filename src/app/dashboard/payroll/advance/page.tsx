"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import Tooltip from "@/components/ui/ToolTips";
import { EmployeeAdvanceData, role } from "@/lib/data";
import { EmployeeAdvanceType } from "@/types/Data.type";
import Link from "next/link";
import React, { useCallback } from "react";
import { FaList, FaPlus, FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const columns = [
  { header: "Employee Name", accessor: "name" },
  { header: "Date", accessor: "holiday" },
  { header: "Amount", accessor: "amount" },
  { header: "Actions", accessor: "action" },
];

const AdvancePage = () => {
  const renderRow = useCallback((item: unknown) => {
    const advanceItem = item as EmployeeAdvanceType;

    return (
      <tr
        key={advanceItem.id}
        className="border-b border-gray-200 even:bg-gray-100 odd:bg-outline-light text-xs sm:text-sm"
      >
        <td className="px-2 py-2 whitespace-nowrap">
          {advanceItem.EmployeeName}
        </td>

        <td className="px-2 py-2 whitespace-nowrap">{advanceItem.Date}</td>
        <td className="px-2 py-2 whitespace-nowrap">
          {advanceItem.AdvancedAmount.toFixed(2)}
        </td>
        <td className="px-2 py-2">
          <div className="flex items-center gap-2">
            <Link href={`/quotations/${advanceItem.id}`}>
              <FaRegEdit className="text-success text-base sm:text-lg" />
            </Link>
            <Link href={`/quotations/${advanceItem.id}`}>
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
            Advanced Paid List
          </h1>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
          {/* Buttons */}
          <div className="flex gap-2">
            <Tooltip content="Add advance" position="bottom">
              <Button size="sm" className="flex items-center gap-1 px-3">
                <FaPlus size={12} />
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
          data={EmployeeAdvanceData}
        />
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Pagination />
      </div>
    </Card>
  );
};

export default React.memo(AdvancePage);
