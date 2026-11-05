import { Field, Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

const FullNameField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Field.Root required invalid={!!errors.fullName}>
      <Field.Label>
        Full Name <Field.RequiredIndicator />
      </Field.Label>
      <Input
        {...register("fullName")}
        autoComplete="name"
        placeholder="Enter your full name"
        borderRadius="lg"
      />
      {/* The message now comes from the Zod schema through zodResolver */}
      <Field.ErrorText>{errors.fullName?.message}</Field.ErrorText>
    </Field.Root>
  );
};

export default FullNameField;
