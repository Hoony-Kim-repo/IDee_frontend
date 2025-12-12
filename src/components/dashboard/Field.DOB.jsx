import { Field, Input } from "@chakra-ui/react";

const DateOfBirthField = () => {
  return (
    <Field.Root>
      <Field.Label>Date of Birth</Field.Label>
      <Input
        id="dob"
        name="dob"
        type="date"
        placeholder="Enter your Date of Birth"
        borderRadius="lg"
      />
    </Field.Root>
  );
};

export default DateOfBirthField;
