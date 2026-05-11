"use client";

import {
  PartyListInput,
  PartyListSchema,
} from "@/validation/GeneralAccounts/PartList.Schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { commitPartyId, generateNextPartyId } from "@/utils/partyId";
import InputField from "../../InputField";
import Button from "../../ui/Button";

type Props = {
  type: "create" | "update";
  data?: Partial<PartyListInput>;
  onClose?: () => void;
};

const PartyListForm = ({ type, data, onClose }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PartyListInput>({
    resolver: zodResolver(PartyListSchema),

    defaultValues: {
      PartyName: data?.PartyName ?? "",
      Address: data?.Address ?? "",
      Phone: data?.Phone ?? "",
      Email: data?.Email ?? "",
    },
  });

  const onSubmit = handleSubmit((formData) => {
    //PartyID form Utility File
    let PartyId = data?.PartyId;

    if (type === "create") {
      const { count, partyId } = generateNextPartyId();

      PartyId = partyId;

      commitPartyId(count);
    }

    const finalData = {
      ...formData,
      PartyId,
    };

    console.log(finalData);

    onClose?.();
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 sm:gap-6">
      <h1 className="text-base text-center sm:text-lg font-semibold text-gray-700">
        {type === "create" ? "Create Party Info" : "Update Party Info"}
      </h1>

      {/* Readonly Party ID */}
      {/* <InputField
        label="Party ID"
        name="PartyId"
        type="text"
        register={register}
        error={errors.PartyId}
        inputProps={{ readOnly: true }}
      /> */}

      <InputField
        label="Party Name"
        name="PartyName"
        type="text"
        register={register}
        error={errors.PartyName}
        placeholder="Enter Name"
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
        placeholder="Your Address"
      />

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        {type === "create" ? "Create" : "Update"}
      </Button>
    </form>
  );
};

export default PartyListForm;
