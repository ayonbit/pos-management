const EMPLOYEE_KEY = "employeeCount";

const getEmployeeCount = () => {
  return Number(localStorage.getItem(EMPLOYEE_KEY) || "0");
};

const setEmployeeCount = (count: number) => {
  localStorage.setItem(EMPLOYEE_KEY, String(count));
};

const formatEmployeeId = (count: number) => {
  return `EMP-${String(count).padStart(3, "0")}`;
};

export const generateNextEmployeeId = () => {
  const nextCount = getEmployeeCount() + 1;

  return {
    count: nextCount,
    employeeId: formatEmployeeId(nextCount),
  };
};

export const commitEmployeeId = (count: number) => {
  setEmployeeCount(count);
};
