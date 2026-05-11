"use client";

import { GeneralAccountData } from "@/lib/data";
import {
  ChartListInput,
  ChartListSchema,
} from "@/validation/GeneralAccounts/ChartAccountList.Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../../InputField";
import Button from "../../ui/Button";

type Props = {
  type: "create" | "update";
  data?: Partial<ChartListInput>;
  onClose?: () => void;
};

const ChartAccountForm = ({ type, data, onClose }: Props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: zodResolver(ChartListSchema),
    defaultValues: {
      ChartAccountName: data?.ChartAccountName ?? "",
      GiAccount: data?.GiAccount ?? "",
      HeadType: data?.HeadType ?? "",
      Status: data?.Status ?? true,
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
          ? "Create Chart Account Info"
          : "Update Chart Account Info"}
      </h1>

      {/* Grade Name */}
      <InputField
        label="Chart Account Name"
        name="ChartAccountName"
        type="text"
        register={register}
        error={errors.ChartAccountName}
        placeholder="Enter Account Name"
      />

      <InputField
        label=""
        name="GiAccount"
        register={register}
        as="select"
        options={GeneralAccountData.map((item) => ({
          label: item.AccountName,
          value: item.AccountName,
        }))}
        error={errors.GiAccount}
        placeholder="Select"
      />

      <InputField
        label="Head Type"
        name="HeadType"
        type="text"
        register={register}
        error={errors.HeadType}
        placeholder="Expenses,Assets"
      />

      <InputField
        label="Active"
        name="Status"
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

export default ChartAccountForm;
