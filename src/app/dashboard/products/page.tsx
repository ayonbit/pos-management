"use client";

import TableSearch from "@/components/TableSearch";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import Tooltip from "@/components/ui/ToolTips";
import { role } from "@/lib/data";
import { Product } from "@/lib/ProductsData";
import { ProductType } from "@/types/Products.types";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback } from "react";
import { FaFilter, FaList, FaPlus, FaRegEdit } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

const columns = [
  { header: "Supplier", accessor: "supplier" },
  { header: "Product Name", accessor: "product" },
  { header: "Product Image", accessor: "img" },
  {
    header: "Product Code",
    accessor: "pcode",
    className: "hidden md:table-cell",
  },
  { header: "Unit", accessor: "address" },
  { header: "SKU NO", accessor: "sku" },
  { header: "Price", accessor: "price" },
  { header: "Quantity", accessor: "quantity" },
  { header: "Actions", accessor: "action" },
];

const ProductPage = () => {
  const renderRow = useCallback((item: unknown) => {
    const productItem = item as ProductType;

    return (
      <tr
        key={productItem.id}
        className="border-b border-gray-200 even:bg-gray-100 odd:bg-outline-light text-xs sm:text-sm"
      >
        <td className="px-2 py-2 whitespace-nowrap">
          {productItem.SupplierName}
        </td>

        <td className="px-2 py-2 whitespace-nowrap">
          {productItem.ProductName}
        </td>

        <td className="px-2 py-2 text-center whitespace-nowrap">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mx-auto">
            <Image
              src={productItem.ProductImage || "/globe.svg"}
              alt={productItem.ProductName || "Product image"}
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, (max-width: 1024px) 48px, 56px"
            />
          </div>
        </td>

        <td className="hidden md:table-cell px-2 py-2 whitespace-nowrap">
          {productItem.ProductCode}
        </td>

        <td className="px-2 py-2 whitespace-nowrap">
          {productItem.ProductUnit}
        </td>

        <td className="px-2 py-2 whitespace-nowrap">{productItem.SKU}</td>

        <td className="px-2 py-2 whitespace-nowrap">
          {productItem.SalesPrice}
        </td>

        <td className="px-2 py-2 whitespace-nowrap">
          {productItem.OpeningQuantity}
        </td>

        <td className="px-2 py-2">
          <div className="flex items-center gap-2">
            <Link href={`/dashboard/products/${productItem.id}`}>
              <IoEyeOutline className="text-primary text-base sm:text-lg" />
            </Link>
            <Link href={`/dashboard/products/${productItem.id}`}>
              <FaRegEdit className="text-success text-base sm:text-lg" />
            </Link>
            <Link href={`/dashboard/products/${productItem.id}`}>
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
          <h1 className="text-lg sm:text-xl font-semibold">Product List</h1>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
          {/* Search */}
          <div className="w-full sm:w-auto">
            <TableSearch />
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <Tooltip content="Add Product" position="bottom">
              <Button size="sm" className="flex items-center gap-1 px-3">
                <FaPlus size={12} />
              </Button>
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
        <Table columns={columns} renderRow={renderRow} data={Product} />
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Pagination />
      </div>
    </Card>
  );
};

export default React.memo(ProductPage);
