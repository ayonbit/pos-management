"use client";

import FormModal from "@/components/FormModal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import Tooltip from "@/components/ui/ToolTips";
import { PartyData, role } from "@/lib/data";
import { PartyType } from "@/types/Data.type";
import Link from "next/link";
import React, { useCallback } from "react";
import { FaList, FaPlus, FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const columns = [
  { header: "Party Code", accessor: "code" },
  { header: "Party Name", accessor: "supplier" },
  { header: "Phone", accessor: "phone" },
  { header: "Address", accessor: "address", className: "hidden md:table-cell" },
  { header: "Email", accessor: "email", className: "hidden md:table-cell" },
  { header: "Actions", accessor: "action" },
];

const PartyPage = () => {
  const renderRow = useCallback((item: unknown) => {
    const partyItem = item as PartyType;

    return (
      <tr
        key={partyItem.id}
        className="border-b border-gray-200 even:bg-gray-100 odd:bg-outline-light text-xs sm:text-sm"
      >
        <td className="px-2 py-2 whitespace-nowrap">{partyItem.PartyId}</td>

        <td className="px-2 py-2 whitespace-nowrap">{partyItem.PartyName}</td>

        <td className="px-2 py-2 whitespace-nowrap">{partyItem.Phone}</td>

        <td className="hidden md:table-cell px-2 py-2 whitespace-nowrap">
          {partyItem.Address}
        </td>

        <td className="hidden md:table-cell px-2 py-2 whitespace-nowrap">
          {partyItem.Email}
        </td>

        <td className="px-2 py-2">
          <div className="flex items-center gap-2">
            <Tooltip content="Update" position="bottom">
              <FormModal
                table="parties"
                type="update"
                id={partyItem.id}
                data={PartyData.find((pa) => pa.id === partyItem.id)}
              >
                <FaRegEdit className="text-success text-base sm:text-lg" />
              </FormModal>
            </Tooltip>

            {role === "admin" && (
              <Tooltip content="Update" position="bottom">
                <FormModal
                  table="parties"
                  type="delete"
                  id={partyItem.id}
                  data={PartyData.find((pa) => pa.id === partyItem.id)}
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
          <h1 className="text-lg sm:text-xl font-semibold">Party List</h1>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
          {/* Buttons */}
          <div className="flex gap-2">
            <Tooltip content="Add Party" position="bottom">
              <FormModal table="parties" type="create">
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
        <Table columns={columns} renderRow={renderRow} data={PartyData} />
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Pagination />
      </div>
    </Card>
  );
};

export default React.memo(PartyPage);
