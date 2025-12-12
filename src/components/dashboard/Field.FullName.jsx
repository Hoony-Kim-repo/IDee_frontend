import { Field, Input } from "@chakra-ui/react";

const FullNameField = ({ errors }) => {
  return (
    <Field.Root required>
      <Field.Label>
        Full Name <Field.RequiredIndicator />
      </Field.Label>
      <Input
        id="fullName"
        name="fullName"
        type="text"
        placeholder="Enter your full name"
        borderRadius="lg"
      />
      <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
    </Field.Root>
  );
};

export default FullNameField;
