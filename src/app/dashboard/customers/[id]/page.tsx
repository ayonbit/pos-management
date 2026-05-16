import { CustomerData } from "@/lib/data";
import { CustomerType } from "@/types/Data.type";
import { notFound } from "next/navigation";
import CustomerDetailsCard from "./CustomerDetailsCard";
type Props = {
  params: Promise<{
    id: string;
  }>;
};

const SingleCustomer = async ({ params }: Props) => {
  const { id } = await params;
  const customer: CustomerType | undefined = CustomerData.find(
    (item) => item.id === Number(id),
  );

  if (!customer) {
    return notFound();
  }
  return <CustomerDetailsCard customer={customer} />;
};

export default SingleCustomer;
