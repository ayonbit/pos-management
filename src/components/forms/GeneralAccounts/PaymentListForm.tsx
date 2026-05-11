"use client";

import {
  PaymentListInput,
  PaymentListSchema,
} from "@/validation/GeneralAccounts/PaymentMethodList.Shcema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../../InputField";
import Button from "../../ui/Button";

type Props = {
  type: "create" | "update";
  data?: Partial<PaymentListInput>;
  onClose?: () => void;
};

const PaymentMethodForm = ({ type, data, onClose }: Props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: zodResolver(PaymentListSchema),
    defaultValues: {
      MethodName: data?.MethodName ?? "",
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
        {type === "create"
          ? "Create Payment Method Info"
          : "Update Payment Method Info"}
      </h1>

      {/* Grade Name */}
      <InputField
        label="Payment Method"
        name="MethodName"
        type="text"
        register={register}
        error={errors.MethodName}
        placeholder="Bkash,Rocket,Card,Cash"
      />

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

export default PaymentMethodForm;
