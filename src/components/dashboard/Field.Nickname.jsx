import { Field, Input } from "@chakra-ui/react";

const NicknameField = () => {
  return (
    <Field.Root>
      <Field.Label>Nickname (Preferred Name)</Field.Label>
      <Input
        id="nickname"
        name="nickname"
        type="text"
        placeholder="Enter your nickname"
        borderRadius="lg"
      />
    </Field.Root>
  );
};

export default NicknameField;
