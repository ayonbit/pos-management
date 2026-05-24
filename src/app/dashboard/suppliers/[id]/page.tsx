import { SupplierData } from "@/lib/data";
import { SupplierType } from "@/types/Data.type";
import { notFound } from "next/navigation";
import SupplierDetailsCard from "./SupplierDetailsCard";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const SingleSupplier = async ({ params }: Props) => {
  const { id } = await params;
  const supplier: SupplierType | undefined = SupplierData.find(
    (item) => item.id === Number(id),
  );

  if (!supplier) {
    return notFound();
  }
  return <SupplierDetailsCard supplier={supplier} />;
};

export default SingleSupplier;
