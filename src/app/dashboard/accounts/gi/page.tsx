"use client";

import FormModal from "@/components/FormModal";
import TableSearch from "@/components/TableSearch";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import Tooltip from "@/components/ui/ToolTips";
import { GeneralAccountData, role } from "@/lib/data";
import { GeneralAccountListType } from "@/types/Data.type";

import React, { useCallback } from "react";
import { FaList, FaPlus, FaRegEdit } from "react-icons/fa";

const columns = [
  { header: "Serial", accessor: "serial" },
  { header: "Account Name", accessor: "account" },
  { header: "Actions", accessor: "action" },
];

const GeneralAccountInformationPage = () => {
  const renderRow = useCallback((item: GeneralAccountListType) => {
    const giItems = item;

    return (
      <tr
        key={giItems.id}
        className="border-b border-gray-200 even:bg-gray-100 odd:bg-outline-light text-xs sm:text-sm"
      >
        <td className="px-2 py-2 whitespace-nowrap">{giItems.id}</td>
        <td className="px-2 py-2 whitespace-nowrap">{giItems.AccountName}</td>
        <td className="px-2 py-2">
          <div className="flex items-center gap-2">
            <Tooltip content="Add Assets" position="bottom">
              <FormModal
                table="gi"
                type="update"
                id={giItems.id}
                data={GeneralAccountData.find((gi) => gi.id === giItems.id)}
              >
                <FaRegEdit className="text-success text-base sm:text-lg" />
              </FormModal>
            </Tooltip>
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
            {role === "admin" && (
              <Tooltip content="Add GI Account" position="left">
                <FormModal table="gi" type="create">
                  <Button size="sm" className="flex items-center gap-1 px-3">
                    <FaPlus size={12} />
                  </Button>
                </FormModal>
              </Tooltip>
            )}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="mt-4 w-full overflow-x-auto">
        <Table
          columns={columns}
          renderRow={renderRow}
          data={GeneralAccountData}
        />
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Pagination />
      </div>
    </Card>
  );
};

export default React.memo(GeneralAccountInformationPage);
