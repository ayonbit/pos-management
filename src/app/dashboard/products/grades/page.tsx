"use client";

import FormModal from "@/components/FormModal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import Tooltip from "@/components/ui/ToolTips";
import { role } from "@/lib/data";
import { ProductGrade } from "@/lib/ProductsData";
import { ProductGradeType } from "@/types/Products.types";
import React, { useCallback } from "react";
import { FaList, FaPlus, FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const columns = [
  { header: "Grade Name", accessor: "productGrade" },
  { header: "Description", accessor: "description" },
  { header: "Status", accessor: "status" },
  { header: "Actions", accessor: "action" },
];

const GradePage = () => {
  const renderRow = useCallback((item: unknown) => {
    const gradeItem = item as ProductGradeType;

    return (
      <tr
        key={gradeItem.id}
        className="border-b border-gray-200 even:bg-gray-100 odd:bg-outline-light text-xs sm:text-sm"
      >
        <td className="px-2 py-2 whitespace-nowrap">
          {gradeItem.productGrade}
        </td>

        {/* FIXED ORDER */}
        <td className="hidden md:table-cell px-2 py-2 whitespace-nowrap">
          {gradeItem.description}
        </td>

        <td className="px-2 py-2">
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              gradeItem.status
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {gradeItem.status ? "Active" : "Inactive"}
          </span>
        </td>

        <td className="px-2 py-2">
          <div className="flex items-center gap-2">
            <Tooltip content="Update" position="bottom">
              <FormModal
                table="productGrade"
                type="update"
                id={gradeItem.id}
                data={ProductGrade.find((grade) => grade.id === gradeItem.id)}
              >
                <FaRegEdit
                  size={16}
                  className="text-success text-base sm:text-lg"
                />
              </FormModal>
            </Tooltip>
            {role === "admin" && (
              <Tooltip content="Delete" position="bottom">
                <FormModal table="productGrade" type="delete" id={gradeItem.id}>
                  <MdDeleteOutline className="text-danger text-base sm:text-lg" />
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
          <h1 className="text-lg sm:text-xl font-semibold">Grade List</h1>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
          {/* Buttons */}
          <div className="flex gap-2">
            <Tooltip content="Add Grade" position="bottom">
              <FormModal table="productGrade" type="create">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-1 px-3"
                >
                  <FaPlus size={12} />
                </Button>
              </FormModal>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Table Wrapper */}
      <div className="mt-4 w-full overflow-x-auto">
        <Table columns={columns} renderRow={renderRow} data={ProductGrade} />
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Pagination />
      </div>
    </Card>
  );
};

export default React.memo(GradePage);
