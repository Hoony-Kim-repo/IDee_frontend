import { Field, Input } from "@chakra-ui/react";

const PhoneNumberField = () => {
  return (
    <Field.Root>
      <Field.Label>Phone Number</Field.Label>
      <Input
        id="phoneNumber"
        name="phoneNumber"
        type="tel"
        placeholder="Enter your Phone Number"
        borderRadius="lg"
      />
    </Field.Root>
  );
};

export default PhoneNumberField;
