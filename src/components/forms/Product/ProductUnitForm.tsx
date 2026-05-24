"use client";

import {
  ProductUnitInput,
  productUnitSchema,
} from "@/validation/Product/ProductUnit.Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../../InputField";
import Button from "../../ui/Button";

type Props = {
  type: "create" | "update";
  data?: Partial<ProductUnitInput>;
  onClose?: () => void;
};

const ProductUnitForm = ({ type, data, onClose }: Props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: zodResolver(productUnitSchema),
    defaultValues: {
      unitName: data?.unitName || "",
      description: data?.description || "",
      status: data?.status ?? true,
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
        {type === "create" ? "Create Product Unit" : "Update Product Unit"}
      </h1>

      {/* Grade Name */}
      <InputField
        label="Unit"
        name="unitName"
        register={register}
        error={errors.unitName}
        placeholder="Enter Unit Name"
      />
      <InputField
        label="Description"
        name="description"
        register={register}
        error={errors.description}
        placeholder="Enter description"
        as="textarea"
      />

      {/* Status */}
      <InputField
        label="Active"
        name="status"
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

export default ProductUnitForm;
