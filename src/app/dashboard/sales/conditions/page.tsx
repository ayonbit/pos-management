"use client";

import FormModal from "@/components/FormModal";
import TableSearch from "@/components/TableSearch";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import Tooltip from "@/components/ui/ToolTips";
import { role, SalesConditions } from "@/lib/data";
import { SalesConditionsType } from "@/types/Data.type";
import React, { useCallback } from "react";
import { FaFilter, FaList, FaPlus, FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const columns = [
  { header: "Serial", accessor: "serial", className: "" },
  { header: "Conditions", accessor: "conditions", className: "" },
  { header: "Actions", accessor: "action", className: "" },
];

const SalesConditionsPage = () => {
  const renderRow = useCallback((item: SalesConditionsType) => {
    const salesConditions = item;

    return (
      <tr
        key={salesConditions.id}
        className="border-b border-gray-200 even:bg-gray-100 odd:bg-outline-light text-xs sm:text-sm"
      >
        <td className="px-2 py-2 whitespace-nowrap">{salesConditions.id}</td>
        <td className="px-2 py-2">{salesConditions.salesConditions}</td>
        <td className="px-2 py-2">
          <div className="flex items-center gap-2">
            <Tooltip content="Update" position="bottom">
              <FormModal
                table="conditions"
                type="update"
                id={salesConditions.id}
                data={SalesConditions.find(
                  (con) => con.id === salesConditions.id,
                )}
              >
                <FaRegEdit className="text-success text-base sm:text-lg" />
              </FormModal>
            </Tooltip>
            {role === "admin" && (
              <Tooltip content="Delete" position="bottom">
                <FormModal
                  table="conditions"
                  type="delete"
                  id={salesConditions.id}
                  data={SalesConditions.find(
                    (con) => con.id === salesConditions.id,
                  )}
                >
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
          <h1 className="text-lg sm:text-xl font-semibold">Sales Conditions</h1>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
          {/* Search full width on mobile */}
          <div className="w-full sm:w-auto">
            <TableSearch />
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <Tooltip content="Add Condition" position="bottom">
              <FormModal table="conditions" type="create">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-1 px-3"
                >
                  <FaPlus size={12} />
                </Button>
              </FormModal>
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
        <Table
          columns={columns}
          renderRow={(item) => renderRow(item)}
          data={SalesConditions}
        />
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Pagination />
      </div>
    </Card>
  );
};

export default React.memo(SalesConditionsPage);
