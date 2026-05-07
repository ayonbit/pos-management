"use client";

import { SalesData } from "@/lib/data";
import { useParams } from "next/navigation";

const SalesDetails = () => {
  const params = useParams();
  const id = Number(params.id);

  const sales = SalesData.find((s) => s.id === id);

  if (!sales) {
    return <div className="p-4">Sales not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold">{sales.id}</h1>
      <p>{sales.CustomerName}</p>
      <p>{sales.PayableAmount.toFixed(2)}</p>
    </div>
  );
};

export default SalesDetails;
