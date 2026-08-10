import { Field, Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

const NicknameField = () => {
  const { register } = useFormContext();

  return (
    <Field.Root>
      <Field.Label>Nickname (Preferred Name)</Field.Label>
      <Input
        {...register("nickName")}
        placeholder="Enter your nickname"
        borderRadius="lg"
      />
    </Field.Root>
  );
};

export default NicknameField;
