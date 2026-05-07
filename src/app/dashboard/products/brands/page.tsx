"use client";

import FormModal from "@/components/FormModal";
import TableSearch from "@/components/TableSearch";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import Tooltip from "@/components/ui/ToolTips";
import { role } from "@/lib/data";
import { ProductBrand } from "@/lib/ProductsData";
import { ProductBrandType } from "@/types/Products.types";
import React, { useCallback } from "react";
import { FaFilter, FaList, FaPlus, FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const columns = [
  { header: "Brand Name", accessor: "brand" },
  { header: "Brand Code", accessor: "code" },
  { header: "Status", accessor: "status" },
  { header: "Actions", accessor: "action" },
];

const BrandPage = () => {
  const renderRow = useCallback((item: unknown) => {
    const brandItem = item as ProductBrandType;

    return (
      <tr
        key={brandItem.id}
        className="border-b border-gray-200 even:bg-gray-100 odd:bg-outline-light text-xs sm:text-sm"
      >
        <td className="px-2 py-2 whitespace-nowrap">{brandItem.brandName}</td>

        <td className="px-2 py-2 whitespace-nowrap">{brandItem.brandCode}</td>

        <td className="px-2 py-2">
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              brandItem.status
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {brandItem.status ? "Active" : "Inactive"}
          </span>
        </td>

        <td className="px-2 py-2">
          <div className="flex items-center gap-2">
            <Tooltip content="Update" position="bottom">
              <FormModal
                table="productBrand"
                type="update"
                id={brandItem.id}
                data={ProductBrand.find((brand) => brand.id === brandItem.id)}
              >
                <FaRegEdit
                  size={16}
                  className="text-success text-base sm:text-lg"
                />
              </FormModal>
            </Tooltip>

            {role === "admin" && (
              <Tooltip content="Delete" position="bottom">
                <FormModal table="productBrand" type="delete" id={brandItem.id}>
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
          <h1 className="text-lg sm:text-xl font-semibold">Brand List</h1>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
          {/* Search */}
          <div className="w-full sm:w-auto">
            <TableSearch />
          </div>

          {/* Buttons and Create Form */}
          <div className="flex gap-2">
            <Tooltip content="Add Brand" position="bottom">
              <FormModal table="productBrand" type="create">
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
        <Table columns={columns} renderRow={renderRow} data={ProductBrand} />
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Pagination />
      </div>
    </Card>
  );
};

export default React.memo(BrandPage);
