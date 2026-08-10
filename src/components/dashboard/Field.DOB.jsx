import { Field, Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

const DateOfBirthField = () => {
  const { register } = useFormContext();

  return (
    <Field.Root>
      <Field.Label>Date of Birth</Field.Label>
      <Input
        {...register("dob")}
        type="date"
        placeholder="Enter your Date of Birth"
        borderRadius="lg"
      />
    </Field.Root>
  );
};

export default DateOfBirthField;
