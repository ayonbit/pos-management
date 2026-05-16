"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { CusCategory } from "@/lib/data";
import { commitCustomerId, generateNextCustomerId } from "@/utils/customerId";
import {
  CustomerInput,
  CustomerSchema,
} from "@/validation/Customer/Customer.Schema";
import InputField from "../../InputField";
import Button from "../../ui/Button";

type Props = {
  type: "create" | "update";
  data?: Partial<CustomerInput>;
  onClose?: () => void;
};

const CustomerForm = ({ type, data, onClose }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerInput>({
    resolver: zodResolver(CustomerSchema),

    defaultValues: {
      CustomerName: data?.CustomerName ?? "",
      Address: data?.Address ?? "",
      Phone: data?.Phone ?? "",
      Email: data?.Email ?? "",
      Balance: data?.Balance ?? 0,
      Action: data?.Action ?? true,
      CustomerCategory: data?.CustomerCategory ?? "",
      DueLimit: data?.DueLimit ?? 99999,
    },
  });

  const onSubmit = handleSubmit((formData) => {
    //CustomerId form Utility File
    let CustomerId = data?.CustomerId;

    if (type === "create") {
      const { count, customerId } = generateNextCustomerId();

      CustomerId = customerId;

      commitCustomerId(count);
    }

    const finalData = {
      ...formData,
      CustomerId,
    };

    console.log(finalData);

    onClose?.();
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 sm:gap-6">
      <h1 className="text-base text-center sm:text-lg font-semibold text-gray-700">
        {type === "create" ? "Create Customer Info" : "Update Customer Info"}
      </h1>

      <InputField
        label="Customer Name"
        name="CustomerName"
        type="text"
        register={register}
        error={errors.CustomerName}
        placeholder="Customer Name"
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
        label=" Customer Type"
        name="CustomerCategory"
        register={register}
        as="select"
        options={CusCategory.map((item) => ({
          label: item.CusCatName,
          value: item.CusCatName,
        }))}
        error={errors.CustomerCategory}
        placeholder="Select"
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

      <InputField
        label="Default"
        name="Action"
        register={register}
        as="checkbox"
      />

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        {type === "create" ? "Create" : "Update"}
      </Button>
    </form>
  );
};

export default CustomerForm;
