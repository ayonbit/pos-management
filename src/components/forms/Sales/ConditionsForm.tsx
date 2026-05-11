"use client";

import InputField from "@/components/InputField";
import Button from "@/components/ui/Button";
import {
  ConditionInput,
  ConditionsSchema,
} from "@/validation/Sales/Conditions.Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Props = {
  type: "create" | "update";
  data?: Partial<ConditionInput>;
  onClose?: () => void;
};
const SalesConditionForm = ({ type, data, onClose }: Props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: zodResolver(ConditionsSchema),
    defaultValues: {
      salesConditions: data?.salesConditions || "",
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
          ? "Create Sales Conditions"
          : "Update Sales Conditions"}
      </h1>

      {/* Conditions*/}
      <InputField
        label=""
        name="salesConditions"
        register={register}
        error={errors.salesConditions}
        placeholder="Terms or Conditions"
        as="textarea"
        textareaProps={{ rows: 5 }}
      />

      {/* Actions */}
      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        {type === "create" ? "Create" : "Update"}
      </Button>
    </form>
  );
};

export default SalesConditionForm;
