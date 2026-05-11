"use client";

import FormModal from "@/components/FormModal";
import TableSearch from "@/components/TableSearch";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import Tooltip from "@/components/ui/ToolTips";
import { CusCategory, role } from "@/lib/data";
import { CustomerCat } from "@/types/Data.type";
import { useCallback } from "react";
import { FaFilter, FaList, FaPlus, FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const columns = [
  { header: "Category Name", accessor: "category" },
  { header: "Description", accessor: "description" },
  { header: "Amount Of", accessor: "amountof" },
  { header: "Amount", accessor: "amount" },
  { header: "Status", accessor: "status" },
  { header: "Actions", accessor: "action" },
];

const CustomerCategory = () => {
  const renderRow = useCallback((item: unknown) => {
    const customerCategory = item as CustomerCat;

    return (
      <tr
        key={customerCategory.id}
        className="border-b border-gray-200 even:bg-gray-100 odd:bg-outline-light text-xs sm:text-sm"
      >
        <td className="px-2 py-2 whitespace-nowrap">
          {customerCategory.CusCatName}
        </td>

        <td className="px-2 py-2 whitespace-nowrap">
          {customerCategory.CusDes}
        </td>

        <td className="px-2 py-2 whitespace-nowrap">
          {customerCategory.CusAmountOf.toFixed(2)}
        </td>

        <td className="px-2 py-2 whitespace-nowrap">
          {customerCategory.CusAmount.toFixed(2)}
        </td>

        {/* Keeping your type */}
        <td className="px-2 py-2 whitespace-nowrap">
          {customerCategory.CusType}
        </td>

        {/* Status badge */}
        <td className="px-2 py-2">
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              customerCategory.CusStatus
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {customerCategory.CusStatus ? "Active" : "Inactive"}
          </span>
        </td>

        <td className="px-2 py-2">
          <div className="flex items-center gap-2">
            {/* Update */}

            <Tooltip content="Update" position="bottom">
              <FormModal
                type="update"
                table="customerCategory"
                id={customerCategory.id}
                data={CusCategory.find((cat) => cat.id === customerCategory.id)}
              >
                <FaRegEdit className="text-success text-base sm:text-lg" />
              </FormModal>
            </Tooltip>

            {/* DELETE */}

            {role === "admin" && (
              <Tooltip content="Delete" position="bottom">
                <FormModal
                  table="customerCategory"
                  type="delete"
                  id={customerCategory.id}
                  data={CusCategory.find(
                    (cat) => cat.id === customerCategory.id,
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
          <h1 className="text-lg sm:text-xl font-semibold">
            Customer Category
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
            <Tooltip content="Add Category" position="bottom">
              <FormModal table="customerCategory" type="create">
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

      {/* Table Wrapper */}
      <div className="mt-4 w-full overflow-x-auto">
        <Table columns={columns} renderRow={renderRow} data={CusCategory} />
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Pagination />
      </div>
    </Card>
  );
};

export default CustomerCategory;
