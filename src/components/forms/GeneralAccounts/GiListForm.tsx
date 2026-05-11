"use client";

import {
  GiListInput,
  giListSchema,
} from "@/validation/GeneralAccounts/GiList.Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../../InputField";
import Button from "../../ui/Button";

type Props = {
  type: "create" | "update";
  data?: Partial<GiListInput>;
  onClose?: () => void;
};

const GiListForm = ({ type, data, onClose }: Props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: zodResolver(giListSchema),
    defaultValues: {
      AccountName: data?.AccountName ?? "",
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
          ? "Create GI Account Info"
          : "Update GI Account Info"}
      </h1>

      {/* Grade Name */}
      <InputField
        label="Account Name"
        name="AccountName"
        type="text"
        register={register}
        error={errors.AccountName}
        placeholder="Enter Account Name"
      />

      {/* Actions */}
      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        {type === "create" ? "Create" : "Update"}
      </Button>
    </form>
  );
};

export default GiListForm;
