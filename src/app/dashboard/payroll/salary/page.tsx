"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import Tooltip from "@/components/ui/ToolTips";
import { role, SalaryListData } from "@/lib/data";
import { SalaryListDataType } from "@/types/Data.type";
import Link from "next/link";
import React, { useCallback } from "react";
import { FaList, FaPlus } from "react-icons/fa";
import { MdDeleteOutline, MdPrint } from "react-icons/md";

const columns = [
  { header: "Year", accessor: "year" },
  { header: "Month", accessor: "month" },
  { header: "Net Salary", accessor: "amount" },
  { header: "Actions", accessor: "action" },
];

const SalaryListPage = () => {
  const renderRow = useCallback((item: unknown) => {
    const salaryListItem = item as SalaryListDataType;

    return (
      <tr
        key={salaryListItem.id}
        className="border-b border-gray-200 even:bg-gray-100 odd:bg-outline-light text-xs sm:text-sm"
      >
        <td className="px-2 py-2 whitespace-nowrap">{salaryListItem.year}</td>

        <td className="px-2 py-2 whitespace-nowrap">{salaryListItem.month}</td>
        <td className="px-2 py-2 whitespace-nowrap">
          {salaryListItem.netSalary.toFixed(2)}
        </td>
        <td className="px-2 py-2">
          <div className="flex items-center gap-2">
            <Link href={`/quotations/${salaryListItem.id}`}>
              <MdPrint className="text-success text-base sm:text-lg" />
            </Link>
            <Link href={`/quotations/${salaryListItem.id}`}>
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
          <h1 className="text-lg sm:text-xl font-semibold">Salary List</h1>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
          {/* Buttons */}
          <div className="flex gap-2">
            <Tooltip content="Add Salary" position="bottom">
              <Button size="sm" className="flex items-center gap-1 px-3">
                <FaPlus size={12} />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Table Wrapper */}
      <div className="mt-4 w-full overflow-x-auto">
        <Table columns={columns} renderRow={renderRow} data={SalaryListData} />
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Pagination />
      </div>
    </Card>
  );
};

export default React.memo(SalaryListPage);
