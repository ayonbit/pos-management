const CUSTOMER_KEY = "customerCount";

const getCustomerCount = () => {
  return Number(localStorage.getItem(CUSTOMER_KEY) || "0");
};

const setCustomerCount = (count: number) => {
  localStorage.setItem(CUSTOMER_KEY, String(count));
};

const formatCustomerId = (count: number) => {
  return `CUS-${String(count).padStart(3, "0")}`;
};

export const generateNextCustomerId = () => {
  const nextCount = getCustomerCount() + 1;

  return {
    count: nextCount,
    customerId: formatCustomerId(nextCount),
  };
};

export const commitCustomerId = (count: number) => {
  setCustomerCount(count);
};
