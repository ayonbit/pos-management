"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

type QuotationItem = {
  product: string;
  quantity: number;
  price: number;
  discount: number;
};

type QuotationForm = {
  customer: string;
  quotationNo: string;
  quotationDate: string;
  expiryDate: string;
  tax: number;
  shipping: number;
  labourCost: number;
  extraDiscount: number;
  items: QuotationItem[];
};

const QuotationPage = () => {
  const { register, control, watch, handleSubmit } = useForm<QuotationForm>({
    defaultValues: {
      customer: "",
      quotationNo: "",
      quotationDate: "",
      expiryDate: "",
      tax: 0,
      shipping: 0,
      labourCost: 0,
      extraDiscount: 0,
      items: [
        {
          product: "",
          quantity: 1,
          price: 0,
          discount: 0,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const items = watch("items");
  const tax = Number(watch("tax")) || 0;
  const shipping = Number(watch("shipping")) || 0;
  const labourCost = Number(watch("labourCost")) || 0;
  const extraDiscount = Number(watch("extraDiscount")) || 0;

  const subTotal = items.reduce((sum, item) => {
    const qty = Number(item.quantity) || 0;
    const price = Number(item.price) || 0;
    const discount = Number(item.discount) || 0;

    return sum + qty * price - discount;
  }, 0);

  const grandTotal = subTotal + tax + shipping + labourCost - extraDiscount;

  const onSubmit = (data: QuotationForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* LEFT */}
        <Card className="xl:col-span-8 p-6">
          <h2 className="text-2xl font-bold mb-6">Add New Quotation</h2>

          {/* Customer */}
          <div className="mb-6">
            <label className="block mb-2 font-medium">Customer</label>

            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  {...register("customer")}
                  placeholder="Search customer..."
                  className="w-full border rounded-lg pl-10 pr-4 py-2"
                />
              </div>

              <Button type="button">Add Customer</Button>
            </div>
          </div>

          {/* Quotation Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div>
              <label className="block mb-2">Quotation No</label>

              <input
                {...register("quotationNo")}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block mb-2">Date</label>

              <input
                type="date"
                {...register("quotationDate")}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block mb-2">Expiry Date</label>

              <input
                type="date"
                {...register("expiryDate")}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
          </div>

          {/* Items */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Quotation Items</h3>

              <Button
                type="button"
                onClick={() =>
                  append({
                    product: "",
                    quantity: 1,
                    price: 0,
                    discount: 0,
                  })
                }
              >
                <FaPlus />
                Add Item
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px] border rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 text-left">Product</th>
                    <th className="p-3 text-center">Qty</th>
                    <th className="p-3 text-center">Unit Price</th>
                    <th className="p-3 text-center">Discount</th>
                    <th className="p-3 text-center">Total</th>
                    <th className="p-3 text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {fields.map((field, index) => {
                    const qty = Number(watch(`items.${index}.quantity`)) || 0;

                    const price = Number(watch(`items.${index}.price`)) || 0;

                    const discount =
                      Number(watch(`items.${index}.discount`)) || 0;

                    const total = qty * price - discount;

                    return (
                      <tr key={field.id} className="border-t">
                        <td className="p-3">
                          <input
                            {...register(`items.${index}.product`)}
                            placeholder="Product Name"
                            className="w-full border rounded-lg px-3 py-2"
                          />
                        </td>

                        <td className="p-3">
                          <input
                            type="number"
                            {...register(`items.${index}.quantity`, {
                              valueAsNumber: true,
                            })}
                            className="w-24 border rounded-lg px-3 py-2"
                          />
                        </td>

                        <td className="p-3">
                          <input
                            type="number"
                            {...register(`items.${index}.price`, {
                              valueAsNumber: true,
                            })}
                            className="w-32 border rounded-lg px-3 py-2"
                          />
                        </td>

                        <td className="p-3">
                          <input
                            type="number"
                            {...register(`items.${index}.discount`, {
                              valueAsNumber: true,
                            })}
                            className="w-32 border rounded-lg px-3 py-2"
                          />
                        </td>

                        <td className="p-3 text-center font-semibold">
                          ৳ {total.toFixed(2)}
                        </td>

                        <td className="p-3 text-center">
                          <button
                            type="button"
                            disabled={fields.length === 1}
                            onClick={() => remove(index)}
                            className="text-red-500 disabled:opacity-40"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Card>

        {/* RIGHT */}
        <Card className="xl:col-span-4 p-6 h-fit xl:sticky xl:top-6">
          <h2 className="text-2xl font-bold mb-6">Quotation Summary</h2>

          <div className="space-y-4">
            <div>
              <label>Sub Total</label>

              <input
                disabled
                value={`৳ ${subTotal.toFixed(2)}`}
                className="w-full border rounded-lg px-4 py-2 bg-gray-50"
              />
            </div>

            <div>
              <label>Extra Discount</label>

              <input
                type="number"
                {...register("extraDiscount", {
                  valueAsNumber: true,
                })}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label>Tax</label>

              <input
                type="number"
                {...register("tax", {
                  valueAsNumber: true,
                })}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label>Shipping</label>

              <input
                type="number"
                {...register("shipping", {
                  valueAsNumber: true,
                })}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label>Labour Cost</label>

              <input
                type="number"
                {...register("labourCost", {
                  valueAsNumber: true,
                })}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div className="rounded-lg bg-slate-100 p-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Grand Total</span>

                <span>৳ {grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Create Quotation
            </Button>
          </div>
        </Card>
      </div>
    </form>
  );
};

export default QuotationPage;
