"use client";

import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import { GeneralAccountData } from "@/lib/data";
import { GeneralAccountType } from "@/types/Data.type";
import Link from "next/link";
import React, { useCallback } from "react";
import { FaEdit, FaList } from "react-icons/fa";

const columns = [
  { header: "Serial", accessor: "serial", className: "" },
  { header: "Account Name", accessor: "account" },
  { header: "Actions", accessor: "action", className: "" },
];

const GeneralAccountInformationPage = () => {
  const renderRow = useCallback((item: unknown) => {
    const generalAccountItem = item as GeneralAccountType;

    return (
      <tr
        key={generalAccountItem.id}
        className="border-b border-gray-200 even:bg-gray-100 odd:bg-outline-light text-xs sm:text-sm"
      >
        <td className="px-2 py-2 whitespace-nowrap">{generalAccountItem.id}</td>
        <td className="px-2 py-2">{generalAccountItem.AccountName}</td>
        <td className="px-2 py-2">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Link href={`/sales/conditions/print/${generalAccountItem.id}`}>
              <FaEdit className="text-success text-base sm:text-lg cursor-pointer hover:opacity-70" />
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
          <h1 className="text-lg sm:text-xl font-semibold">
            General Account List
          </h1>
        </div>
      </div>

      {/* Table Wrapper for Mobile Scroll */}
      <div className="mt-4 w-full overflow-x-auto">
        <Table
          columns={columns}
          renderRow={(item) => renderRow(item)}
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
