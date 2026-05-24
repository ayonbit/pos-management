"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { commitSupplierId, generateNextSupplierId } from "@/utils/supplierId";
import {
  SupplierInput,
  SupplierSchema,
} from "@/validation/Supplier/Supplier.Schema";
import InputField from "../../InputField";
import Button from "../../ui/Button";

type Props = {
  type: "create" | "update";
  data?: Partial<SupplierInput>;
  onClose?: () => void;
};

const SupplierForm = ({ type, data, onClose }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SupplierInput>({
    resolver: zodResolver(SupplierSchema),

    defaultValues: {
      SupplierName: data?.SupplierName ?? "",
      Address: data?.Address ?? "",
      Phone: data?.Phone ?? "",
      Email: data?.Email ?? "",
      Balance: data?.Balance ?? 0,
      DueLimit: data?.DueLimit ?? 99999,
    },
  });

  const onSubmit = handleSubmit((formData) => {
    //CustomerId form Utility File
    let SupplierId = data?.SupplierId;

    if (type === "create") {
      const { count, supplierId } = generateNextSupplierId();

      SupplierId = supplierId;

      commitSupplierId(count);
    }

    const finalData = {
      ...formData,
      SupplierId,
    };

    console.log(finalData);

    onClose?.();
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 sm:gap-6">
      <h1 className="text-base text-center sm:text-lg font-semibold text-gray-700">
        {type === "create" ? "Create Supplier Info" : "Update Supplier Info"}
      </h1>

      <InputField
        label="Supplier Name"
        name="SupplierName"
        type="text"
        register={register}
        error={errors.SupplierName}
        placeholder="Supplier Name"
      />
      <InputField
        label="Company"
        name="company"
        type="text"
        register={register}
        error={errors.company}
        placeholder="Company Name"
      />
      <InputField
        label="Phone"
        name="Phone"
        type="text"
        register={register}
        error={errors.Phone}
        placeholder="11 digit phone number"
      />
      <InputField
        label="Email"
        name="Email"
        type="email"
        register={register}
        error={errors.Email}
        placeholder="email@email.com"
      />
      <InputField
        label="Address"
        name="Address"
        type="text"
        register={register}
        error={errors.Address}
        placeholder="Customer Address"
      />

      <InputField
        label="Opening Balance"
        name="Balance"
        type="number"
        register={register}
        error={errors.Balance}
      />

      <InputField
        label="Due Limit"
        name="DueLimit"
        type="number"
        register={register}
        error={errors.DueLimit}
      />

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        {type === "create" ? "Create" : "Update"}
      </Button>
    </form>
  );
};

export default SupplierForm;
