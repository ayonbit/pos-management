

import React from "react";

export interface Column {
  header: string;
  accessor: string;
  className?: string;
}

export interface TableProps<T> {
  columns: Column[];
  data: T[];
  renderRow: (item: T) => React.ReactNode;
}
