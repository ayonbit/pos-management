"use client";

import InputField from "@/components/InputField";
import Button from "@/components/ui/Button";
import {
  CustomerCategoryInput,
  customerCategorySchema,
} from "@/validation/Customer/customerCategory.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Props = {
  type: "create" | "update";
  data?: Partial<CustomerCategoryInput>;
  onClose?: () => void;
};
const CustomerCategoryForm = ({ type, data, onClose }: Props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: zodResolver(customerCategorySchema),
    defaultValues: {
      CusCatName: data?.CusCatName || "",
      CusDes: data?.CusDes || "",
      CusAmount: data?.CusAmount ?? 0,
      CusAmountOf: data?.CusAmountOf ?? 0,
      CusType: data?.CusType || "Amount",
      CusStatus: data?.CusStatus ?? true,
    },
  });

  const onSubmit = handleSubmit((formData) => {
    console.log(formData); // already parsed by zod
    onClose?.();
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 sm:gap-6">
      {/* Title */}
      <h1 className="text-base text-center sm:text-lg font-semibold text-gray-700">
        {type === "create"
          ? "Create Customer Category"
          : "Update Customer Category"}
      </h1>

      {/* Category Name */}
      <InputField
        label="Category Name"
        name="CusCatName"
        register={register}
        error={errors.CusCatName}
        placeholder="Enter category name"
      />

      {/* Description */}
      <InputField
        label="Description"
        name="CusDes"
        register={register}
        error={errors.CusDes}
        placeholder="Enter description"
        as="textarea"
        textareaProps={{ rows: 3 }}
      />

      {/* Amount Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <InputField
          label="Amount"
          name="CusAmount"
          type="number"
          register={register}
          error={errors.CusAmount}
          placeholder="0 to any amount"
        />

        <InputField
          label="Amount Of"
          name="CusAmountOf"
          type="number"
          register={register}
          error={errors.CusAmountOf}
          placeholder="0 to 100%"
        />
      </div>

      {/* Type (Radio) */}
      <InputField
        label="Customer Category "
        name="CusType"
        register={register}
        error={errors.CusType}
        as="radio"
        options={[
          { label: "Amount", value: "Amount" },
          { label: "Percentage", value: "Percentage" },
        ]}
      />

      {/* Status */}
      <InputField
        label="Active"
        name="CusStatus"
        register={register}
        as="checkbox"
      />

      {/* Actions */}
      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        {type === "create" ? "Create" : "Update"}
      </Button>
    </form>
  );
};

export default CustomerCategoryForm;
