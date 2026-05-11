import React from "react";

export interface Column<T = any> {
  header: string;
  accessor: string;
  className?: string;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: ReadonlyArray<T>;
  renderRow: (item: T, index: number) => React.ReactNode;
}
