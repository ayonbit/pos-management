"use client";

import FormModal from "@/components/FormModal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import Tooltip from "@/components/ui/ToolTips";
import { role } from "@/lib/data";
import { ProductUnit } from "@/lib/ProductsData";
import { ProductUnitType } from "@/types/Products.types";
import React, { useCallback } from "react";
import { FaList, FaPlus, FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const columns = [
  { header: "Unit Name", accessor: "unit" },
  { header: "Description", accessor: "description" },
  { header: "Status", accessor: "status" },
  { header: "Actions", accessor: "action" },
];

const UnitPage = () => {
  const renderRow = useCallback((item: ProductUnitType) => {
    const unitItem = item;

    return (
      <tr
        key={unitItem.id}
        className="border-b border-gray-200 even:bg-gray-100 odd:bg-outline-light text-xs sm:text-sm"
      >
        <td className="px-2 py-2 whitespace-nowrap">{unitItem.unitName}</td>

        {/* FIXED ORDER */}
        <td className="hidden md:table-cell px-2 py-2 whitespace-nowrap">
          {unitItem.description}
        </td>

        <td className="px-2 py-2">
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              unitItem.status
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {unitItem.status ? "Active" : "Inactive"}
          </span>
        </td>

        <td className="px-2 py-2">
          <div className="flex items-center gap-2">
            <Tooltip content="Update" position="bottom">
              <FormModal
                type="update"
                table="productUnit"
                id={unitItem.id}
                data={ProductUnit.find((u) => u.id === unitItem.id)}
              >
                <FaRegEdit className="text-success text-base sm:text-lg cursor-pointer" />
              </FormModal>
            </Tooltip>

            {role === "admin" && (
              <Tooltip content="Delete" position="bottom">
                <FormModal
                  type="delete"
                  table="productUnit"
                  id={unitItem.id}
                  data={ProductUnit.find((u) => u.id === unitItem.id)}
                >
                  <MdDeleteOutline className="text-danger text-base sm:text-lg cursor-pointer" />
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
          <h1 className="text-lg sm:text-xl font-semibold">Unit List</h1>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
          {/* Buttons */}
          <div className="flex gap-2">
            <Tooltip content="Add Unit" position="bottom">
              <FormModal type="create" table="productUnit">
                <Button size="sm" className="flex items-center gap-1 px-3">
                  <FaPlus size={12} />
                </Button>
              </FormModal>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Table Wrapper */}
      <div className="mt-4 w-full overflow-x-auto">
        <Table columns={columns} renderRow={renderRow} data={ProductUnit} />
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Pagination />
      </div>
    </Card>
  );
};

export default React.memo(UnitPage);
