"use client";

import FormModal from "@/components/FormModal";
import TableSearch from "@/components/TableSearch";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import Tooltip from "@/components/ui/ToolTips";
import { AssetsListData, role } from "@/lib/data";
import { AssetsListType } from "@/types/Data.type";
import React, { useCallback } from "react";
import { FaList, FaPlus, FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const columns = [
  { header: "Assets Name", accessor: "assets" },
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

const CompanyAssets = () => {
  const renderRow = useCallback((item: AssetsListType) => {
    const assetsItems = item;

    return (
      <tr
        key={assetsItems.id}
        className="border-b border-gray-200 even:bg-gray-100 odd:bg-outline-light text-xs sm:text-sm"
      >
        <td className="px-2 py-2 whitespace-nowrap">{assetsItems.AssetName}</td>

        <td className="hidden md:table-cell px-2 py-2 whitespace-nowrap">
          {assetsItems.Description}
        </td>

        <td className="px-2 py-2 whitespace-nowrap">
          {assetsItems.OpeningBalance.toFixed(2)}
        </td>

        <td className="px-2 py-2 whitespace-nowrap">
          {assetsItems.CurrentBalance.toFixed(2)}
        </td>

        <td className="px-2 py-2">
          <div className="flex items-center gap-2">
            <Tooltip position="bottom" content="Update">
              <FormModal
                table="assets"
                type="update"
                id={assetsItems.id}
                data={AssetsListData.find((ass) => ass.id === assetsItems.id)}
              >
                <FaRegEdit className="text-success text-base sm:text-lg" />
              </FormModal>
            </Tooltip>

            {role === "admin" && (
              <Tooltip content="Delete" position="bottom">
                <FormModal
                  table="assets"
                  type="delete"
                  id={assetsItems.id}
                  data={AssetsListData.find((ass) => ass.id === assetsItems.id)}
                >
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
          <h1 className="text-lg sm:text-xl font-semibold">
            Company Assets List
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
            <Tooltip content="Add Assets" position="bottom">
              <FormModal table="assets" type="create">
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
        <Table columns={columns} renderRow={renderRow} data={AssetsListData} />
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Pagination />
      </div>
    </Card>
  );
};

export default React.memo(CompanyAssets);
