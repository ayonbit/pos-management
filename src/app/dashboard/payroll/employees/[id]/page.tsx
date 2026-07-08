import { EmployeesList } from "@/lib/data";
import { EmployeesListType } from "@/types/Data.type";
import { notFound } from "next/navigation";
import EmployeeDetailsCard from "./EmployeeDetailsCard";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const SingleEmployee = async ({ params }: Props) => {
  const { id } = await params;
  const employee: EmployeesListType | undefined = EmployeesList.find(
    (item) => item.id === Number(id),
  );

  if (!employee) {
    return notFound();
  }
  return <EmployeeDetailsCard employee={employee} />;
};

export default SingleEmployee;
