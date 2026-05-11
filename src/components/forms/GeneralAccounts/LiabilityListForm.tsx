"use client";

import {
  LiabilityListInput,
  LiabilityListSchema,
} from "@/validation/GeneralAccounts/CompanyLiability";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../../InputField";
import Button from "../../ui/Button";

type Props = {
  type: "create" | "update";
  data?: Partial<LiabilityListInput>;
  onClose?: () => void;
};

const LiabilityListForm = ({ type, data, onClose }: Props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: zodResolver(LiabilityListSchema),
    defaultValues: {
      LiabilityName: data?.LiabilityName ?? "",
      Description: data?.Description ?? "",
      OpeningBalance: data?.OpeningBalance ?? 0,
      CurrentBalance: data?.CurrentBalance ?? 0,
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
          ? "Create Company Liability Info"
          : "Update Company Liability Info"}
      </h1>

      {/* Grade Name */}
      <InputField
        label="Liability Name"
        name="LiabilityName"
        type="text"
        register={register}
        error={errors.LiabilityName}
        placeholder="Enter Liability Name"
      />
      <InputField
        label="Description"
        name="Description"
        as="textarea"
        textareaProps={{ rows: 3 }}
        register={register}
        error={errors.Description}
        placeholder="Enter Description"
      />
      <InputField
        label="Opening Balance"
        name="OpeningBalance"
        type="number"
        register={register}
        error={errors.OpeningBalance}
      />
      <InputField
        label="Current Balance"
        name="CurrentBalance"
        type="number"
        register={register}
        error={errors.CurrentBalance}
      />

      {/* Actions */}
      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        {type === "create" ? "Create" : "Update"}
      </Button>
    </form>
  );
};

export default LiabilityListForm;
