"use client";

import { Column, TableProps } from "@/types/Table.types";
import React from "react";

const Table = <T,>({ columns, data, renderRow }: TableProps<T>) => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar">
      <table className="w-full mt-2 border-collapse min-w-max">
        {/* Header */}
        <thead>
          <tr className="text-left text-gray-500 text-xs sm:text-sm border-b">
            {columns.map((col: Column) => (
              <th
                key={col.accessor}
                className={`px-1 py-2 whitespace-nowrap font-medium ${
                  col.className || ""
                }`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody className="text-xs sm:text-sm">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              {renderRow(item, index)}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
