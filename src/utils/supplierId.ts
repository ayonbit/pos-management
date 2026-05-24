const SUPPLIER_KEY = "supplierCount";

const getSupplierCount = () => {
  return Number(localStorage.getItem(SUPPLIER_KEY) || "0");
};

const setSupplierCount = (count: number) => {
  localStorage.setItem(SUPPLIER_KEY, String(count));
};

const formatSupplierId = (count: number) => {
  return `SUP-${String(count).padStart(3, "0")}`;
};

export const generateNextSupplierId = () => {
  const nextCount = getSupplierCount() + 1;

  return {
    count: nextCount,
    supplierId: formatSupplierId(nextCount),
  };
};

export const commitSupplierId = (count: number) => {
  setSupplierCount(count);
};
