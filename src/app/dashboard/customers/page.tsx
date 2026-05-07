"use client";

import FormModal from "@/components/FormModal";
import TableSearch from "@/components/TableSearch";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import Tooltip from "@/components/ui/ToolTips";
import { CustomerData, role } from "@/lib/data";
import { CustomerType } from "@/types/Data.type";
import Link from "next/link";
import React, { useCallback } from "react";
import { FaFilter, FaList, FaPlus, FaRegEdit } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

const columns = [
  { header: "Customer Code", accessor: "code" },
  { header: "Customer Name", accessor: "customer" },
  { header: "Phone", accessor: "phone", className: "hidden md:table-cell" },
  { header: "Address", accessor: "address", className: "hidden md:table-cell" },
  { header: "Email", accessor: "email", className: "hidden md:table-cell" },
  { header: "Status", accessor: "status", className: "" },
  { header: "Current Balance", accessor: "balance" },
  { header: "Actions", accessor: "action" },
];

const CustomerPage = () => {
  const renderRow = useCallback((item: unknown) => {
    const customerItem = item as CustomerType;

    return (
      <tr
        key={customerItem.id}
        className="border-b border-gray-200 even:bg-gray-100 odd:bg-outline-light text-xs sm:text-sm"
      >
        <td className="px-2 py-2 whitespace-nowrap">
          {customerItem.CustomerId}
        </td>

        <td className="px-2 py-2 whitespace-nowrap">
          {customerItem.CustomerName}
        </td>

        {/* FIXED ORDER */}
        <td className="hidden md:table-cell px-2 py-2 whitespace-nowrap">
          {customerItem.Phone}
        </td>

        <td className="hidden md:table-cell px-2 py-2 whitespace-nowrap">
          {customerItem.Address}
        </td>

        <td className="hidden md:table-cell px-2 py-2 whitespace-nowrap">
          {customerItem.Email}
        </td>

        <td className="px-2 py-2">
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              customerItem.Action
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {customerItem.Action ? "Active" : "Inactive"}
          </span>
        </td>

        <td className="px-2 py-2 text-center whitespace-nowrap">
          {customerItem.Balance.toFixed(2)}
        </td>

        <td className="px-2 py-2">
          <div className="flex items-center gap-2">
            {/* VIEW */}

            <Tooltip content="View" position="bottom">
              <Link href={`/dashboard/customers/${customerItem.id}`}>
                <IoEyeOutline
                  size={16}
                  className="text-primary text-base sm:text-lg"
                />
              </Link>
            </Tooltip>

            {/* EDIT */}
            {/* <Link href={`/dashboard/customers/${customerItem.id}`}> </Link> */}
            <Tooltip content="Edit" position="bottom">
              <FormModal type="update" table="customer" data={customerItem}>
                <FaRegEdit
                  size={16}
                  className="text-success text-base sm:text-lg"
                />
              </FormModal>
            </Tooltip>

            {/* DELETE */}
            {role === "admin" && (
              <Tooltip content="Delete" position="bottom">
                <FormModal table="customer" type="delete" id={customerItem.id}>
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
          <h1 className="text-lg sm:text-xl font-semibold">Customer List</h1>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
          {/* Search */}
          <div className="w-full sm:w-auto">
            <TableSearch />
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <Tooltip content="Add Customer" position="bottom">
              <FormModal table="customer" type="create">
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
        <Table columns={columns} renderRow={renderRow} data={CustomerData} />
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Pagination />
      </div>
    </Card>
  );
};

export default React.memo(CustomerPage);
