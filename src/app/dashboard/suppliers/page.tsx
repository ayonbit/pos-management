"use client";

import FormModal from "@/components/FormModal";
import TableSearch from "@/components/TableSearch";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import Tooltip from "@/components/ui/ToolTips";
import { role, SupplierData } from "@/lib/data";
import { SupplierType } from "@/types/Data.type";
import Link from "next/link";
import React, { useCallback } from "react";
import { FaFilter, FaList, FaPlus, FaRegEdit } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

const columns = [
  { header: "Supplier Code", accessor: "code" },
  { header: "Supplier Name", accessor: "supplier" },
  {
    header: "Company",
    accessor: "customer",
    className: "hidden md:table-cell",
  },
  { header: "Phone", accessor: "phone" },
  { header: "Address", accessor: "address", className: "hidden md:table-cell" },

  { header: "Current Balance", accessor: "balance" },
  { header: "Actions", accessor: "action" },
];

const SupplierPage = () => {
  const renderRow = useCallback((item: unknown) => {
    const supplierItem = item as SupplierType;

    return (
      <tr
        key={supplierItem.id}
        className="border-b border-gray-200 even:bg-gray-100 odd:bg-outline-light text-xs sm:text-sm"
      >
        <td className="px-1 py-2 whitespace-nowrap">
          {supplierItem.SupplierId}
        </td>

        <td className="px-1 py-2 whitespace-nowrap">
          {supplierItem.SupplierName}
        </td>

        <td className="hidden md:table-cell px-1 py-2 whitespace-nowrap">
          {supplierItem.company}
        </td>

        <td className="px-1 py-2 whitespace-nowrap">{supplierItem.Phone}</td>

        <td className="hidden md:table-cell px-1 py-2 whitespace-nowrap">
          {supplierItem.Address}
        </td>

        <td className="px-1 py-2 text-center whitespace-nowrap">
          {supplierItem.Balance.toFixed(2)}
        </td>

        <td className="px-1 py-2">
          <div className="flex items-center gap-2">
            {/* VIEW */}
            <Tooltip content="View" position="bottom">
              <Link href={`/dashboard/suppliers/${supplierItem.id}`}>
                <IoEyeOutline
                  size={16}
                  className="text-primary text-base sm:text-lg"
                />
              </Link>
            </Tooltip>

            {/* EDIT */}
           
            <Tooltip content="Edit" position="bottom">
              <FormModal type="update" table="supplier" data={supplierItem}>
                <FaRegEdit
                  size={16}
                  className="text-success text-base sm:text-lg"
                />
              </FormModal>
            </Tooltip>

            {/* DELETE */}
            {role === "admin" && (
              <Tooltip content="Delete" position="bottom">
                <FormModal table="supplier" type="delete" id={supplierItem.id}>
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
          <h1 className="text-lg sm:text-xl font-semibold">Supplier List</h1>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
          {/* Search */}
          <div className="w-full sm:w-auto">
            <TableSearch />
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <Tooltip content="Add Supplier" position="bottom">
              <FormModal table="supplier" type="create">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-1 px-3"
                >
                  <FaPlus size={16} />
                </Button>
              </FormModal>
            </Tooltip>

            <Tooltip content="Filter" position="bottom">
              <Button size="sm" className="flex items-center gap-1 px-3">
                <FaFilter size={16} />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Table Wrapper */}
      <div className="mt-4 w-full overflow-x-auto">
        <Table columns={columns} renderRow={renderRow} data={SupplierData} />
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Pagination />
      </div>
    </Card>
  );
};

export default React.memo(SupplierPage);
