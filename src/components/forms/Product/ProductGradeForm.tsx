"use client";

import {
  ProductGradeInput,
  productGradeSchema,
} from "@/validation/Product/ProductGrade.Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../../InputField";
import Button from "../../ui/Button";

type Props = {
  type: "create" | "update";
  data?: Partial<ProductGradeInput>;
  onClose?: () => void;
};

const ProductGradeForm = ({ type, data, onClose }: Props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<ProductGradeInput>({
    resolver: zodResolver(productGradeSchema),
    defaultValues: {
      productGrade: data?.productGrade || "",
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
        {type === "create" ? "Create Product Grade" : "Update Product Grade"}
      </h1>

      {/* Grade Name */}
      <InputField
        label="Grade Name"
        name="productGrade"
        register={register}
        error={errors.productGrade}
        placeholder="Enter grade name"
      />
      <InputField
        label="Description"
        name="description"
        register={register}
        error={errors.description}
        placeholder="Enter description"
      />

      {/* Status */}
      <InputField<ProductGradeInput>
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

export default ProductGradeForm;
