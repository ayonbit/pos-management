"use client";

import { QuotationData } from "@/lib/data";
import { useParams } from "next/navigation";

const QuotationDetails = () => {
  const params = useParams();
  const id = Number(params.id);

  const quotation = QuotationData.find((q) => q.id === id);

  if (!quotation) {
    return <div className="p-4">Quotation not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold">{quotation.QuotationId}</h1>
      <p>{quotation.CustomerName}</p>
      <p>{quotation.TotalPayable.toFixed(2)}</p>
    </div>
  );
};

export default QuotationDetails;
