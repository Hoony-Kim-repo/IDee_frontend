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
        {...register("fullName", {
          required: "Full name is required",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters",
          },
        })}
        placeholder="Enter your full name"
        borderRadius="lg"
      />
      <Field.ErrorText>{errors.fullName?.message}</Field.ErrorText>
    </Field.Root>
  );
};

export default FullNameField;
