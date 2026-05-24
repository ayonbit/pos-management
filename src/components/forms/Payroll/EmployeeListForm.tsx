"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { commitEmployeeId, generateNextEmployeeId } from "@/utils/employeeId";
import {
  EmployeeInput,
  EmployeeSchema,
} from "@/validation/Payroll/Employees.Schema";
import InputField from "../../InputField";
import Button from "../../ui/Button";

type Props = {
  type: "create" | "update";
  data?: Partial<EmployeeInput>;
  onClose?: () => void;
};

const EmployeeListForm = ({ type, data, onClose }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmployeeInput>({
    resolver: zodResolver(EmployeeSchema),

    defaultValues: {
      employeeNid: data?.employeeNid ?? "",
      employeeName: data?.employeeName ?? "",
      employeeDesignation: data?.employeeDesignation ?? "",
      employeePhone: data?.employeePhone ?? "",
      employeeAddress: data?.employeeAddress ?? "",
      employeeEmail: data?.employeeEmail ?? "",
      employeeSalary: data?.employeeSalary,
      employeeJoiningDate: data?.employeeJoiningDate,
    },
  });

  const onSubmit = handleSubmit((formData) => {
    //CustomerId form Utility File
    let EmployeeId = data?.employeeId;

    if (type === "create") {
      const { count, employeeId } = generateNextEmployeeId();

      EmployeeId = employeeId;

      commitEmployeeId(count);
    }

    const finalData = {
      ...formData,
      EmployeeId,
    };

    console.log(finalData);

    onClose?.();
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 sm:gap-6">
      <h1 className="text-base text-center sm:text-lg font-semibold text-gray-700">
        {type === "create" ? "Create Employee Info" : "Update Employee Info"}
      </h1>

      <InputField
        label="Employee Name"
        name="employeeName"
        type="text"
        register={register}
        error={errors.employeeName}
        placeholder="Employee Name"
      />
      <InputField
        label="Designation"
        name="employeeDesignation"
        type="text"
        register={register}
        error={errors.employeeDesignation}
        placeholder="Sales Representative"
      />
      <InputField
        label="ID Card"
        name="employeeNid"
        type="number"
        register={register}
        error={errors.employeeNid}
        placeholder="NID CARD NO"
      />
      <InputField
        label="Phone"
        name="employeePhone"
        type="text"
        register={register}
        error={errors.employeePhone}
        placeholder="11 digit phone number"
      />
      <InputField
        label="Email"
        name="employeeEmail"
        type="email"
        register={register}
        error={errors.employeeEmail}
        placeholder="email@email.com"
      />
      <InputField
        label="Address"
        name="employeeAddress"
        type="text"
        register={register}
        error={errors.employeeAddress}
        placeholder="Employee Address"
      />

      <InputField
        label="Salary"
        name="employeeSalary"
        type="number"
        register={register}
        error={errors.employeeSalary}
        placeholder="12500"
      />

      <InputField
        label="Joining Date"
        name="employeeJoiningDate"
        type="date"
        register={register}
        error={errors.employeeJoiningDate}
      />

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        {type === "create" ? "Create" : "Update"}
      </Button>
    </form>
  );
};

export default EmployeeListForm;
