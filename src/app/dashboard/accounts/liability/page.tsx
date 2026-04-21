"use client";

import TableSearch from "@/components/TableSearch";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import Tooltip from "@/components/ui/ToolTips";
import { LiabilitiesListData, role } from "@/lib/data";
import { LiabilityListType } from "@/types/Data.type";
import Link from "next/link";
import React, { useCallback } from "react";
import { FaList, FaPlus, FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const columns = [
  { header: "Liability Name", accessor: "liability" },
  {
    header: "Description",
    accessor: "description",
    className: "hidden md:table-cell",
  },
  {
    header: "Opening Balance",
    accessor: "openingbalance",
  },
  {
    header: "Current Balance",
    accessor: "currentbalance",
  },

  { header: "Actions", accessor: "action" },
];

const CompanyLiability = () => {
  const renderRow = useCallback((item: unknown) => {
    const liabilityItem = item as LiabilityListType;

    return (
      <tr
        key={liabilityItem.id}
        className="border-b border-gray-200 even:bg-gray-100 odd:bg-outline-light text-xs sm:text-sm"
      >
        <td className="px-2 py-2 whitespace-nowrap">
          {liabilityItem.LiabilityName}
        </td>

        <td className="px-2 py-2 whitespace-nowrap">
          {liabilityItem.Description}
        </td>

        <td className="hidden md:table-cell px-2 py-2 whitespace-nowrap">
          {liabilityItem.OpeningBalance.toFixed(2)}
        </td>

        <td className="hidden md:table-cell px-2 py-2 whitespace-nowrap">
          {liabilityItem.CurrentBalance.toFixed(2)}
        </td>

        <td className="px-2 py-2">
          <div className="flex items-center gap-2">
            <Link href={`/quotations/${liabilityItem.id}`}>
              <FaRegEdit className="text-success text-base sm:text-lg" />
            </Link>
            <Link href={`/quotations/${liabilityItem.id}`}>
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
          <h1 className="text-lg sm:text-xl font-semibold">Liability List</h1>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
          {/* Search */}
          <div className="w-full sm:w-auto">
            <TableSearch />
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <Tooltip content="Add Liability" position="bottom">
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
          data={LiabilitiesListData}
        />
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Pagination />
      </div>
    </Card>
  );
};

export default React.memo(CompanyLiability);
