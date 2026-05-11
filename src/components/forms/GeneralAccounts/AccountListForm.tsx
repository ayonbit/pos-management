"use client";

import {
  AccountListInput,
  accountListSchema,
} from "@/validation/GeneralAccounts/AccountList.Schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../../InputField";
import Button from "../../ui/Button";

type Props = {
  type: "create" | "update";
  data?: Partial<AccountListInput>;
  onClose?: () => void;
};

const AccountListForm = ({ type, data, onClose }: Props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: zodResolver(accountListSchema),
    defaultValues: {
      AccountNo: data?.AccountNo ?? "",
      AccountName: data?.AccountName ?? "",
      BankName: data?.BankName ?? "",
      BranchName: data?.BranchName ?? "",
      OpeningBalance: data?.OpeningBalance ?? 0,
      status: data?.status ?? true,
      default: data?.default ?? false,
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
          ? "Create Bank Account Info"
          : "Update Bank Account Info"}
      </h1>

      {/* Grade Name */}
      <InputField
        label="Bank Name"
        name="BankName"
        type="text"
        register={register}
        error={errors.BankName}
        placeholder="Enter Bank Name"
      />
      <InputField
        label="Branch Name"
        name="BranchName"
        type="text"
        register={register}
        error={errors.BranchName}
        placeholder="Enter Branch Name"
      />
      <InputField
        label="Account Name"
        name="AccountName"
        type="text"
        register={register}
        error={errors.AccountName}
        placeholder="Account Name"
      />
      <InputField
        label="Account Number"
        name="AccountNo"
        type="text"
        register={register}
        error={errors.AccountNo}
        placeholder="0123456789"
      />
      <InputField
        label="Opening Balance"
        name="OpeningBalance"
        type="number"
        register={register}
        error={errors.OpeningBalance}
        placeholder="0.00"
      />

      <InputField
        label="Active"
        name="status"
        register={register}
        as="checkbox"
      />

      <InputField
        label="Default"
        name="default"
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

export default AccountListForm;
