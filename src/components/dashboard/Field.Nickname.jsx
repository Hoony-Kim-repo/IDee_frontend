/**
 * Field.Nickname.jsx
 *
 * Optional "Nickname (Preferred Name)" input of the create/edit profile form.
 *
 * Validation rules live in the Zod schema
 */
import { Badge, Field, Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

const NicknameField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Field.Root invalid={!!errors.nickname}>
      <Field.Label>
        Nickname (Preferred Name){" "}
        <Field.RequiredIndicator
          fallback={
            <Badge size={"xs"} variant={"surface"}>
              Optional
            </Badge>
          }
        />
      </Field.Label>
      <Input
        {...register("nickname")}
        autoComplete="nickname"
        placeholder="Enter your nickname"
        borderRadius="lg"
      />
      <Field.ErrorText>{errors.nickname?.message}</Field.ErrorText>
    </Field.Root>
  );
};

export default NicknameField;
