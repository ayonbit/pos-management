"use client";

import {
  ProductBrandInput,
  productBrandSchema,
} from "@/validation/Product/ProductBrand.Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../../InputField";
import Button from "../../ui/Button";

type Props = {
  type: "create" | "update";
  data?: Partial<ProductBrandInput>;
  onClose?: () => void;
};

const ProductBrandForm = ({ type, data, onClose }: Props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: zodResolver(productBrandSchema),
    defaultValues: {
      brandName: data?.brandName || "",
      brandCode: data?.brandCode || "",
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
        {type === "create" ? "Create Product Brand" : "Update Product Brand"}
      </h1>

      {/* Brand Name */}
      <InputField
        label="Brand Name"
        name="brandName"
        register={register}
        error={errors.brandName}
        placeholder="Enter brand name"
      />
      <InputField
        label="Brand Code"
        name="brandCode"
        register={register}
        error={errors.brandCode}
        placeholder="Enter brand code"
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

export default ProductBrandForm;
