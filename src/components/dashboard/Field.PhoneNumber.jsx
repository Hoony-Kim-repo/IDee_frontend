import { Field, Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

const PhoneNumberField = () => {
  const { register } = useFormContext();

  return (
    <Field.Root>
      <Field.Label>Phone Number (without '-')</Field.Label>
      <Input
        {...register("phoneNumber")}
        placeholder="Enter your Phone Number"
        borderRadius="lg"
      />
    </Field.Root>
  );
};

export default PhoneNumberField;
