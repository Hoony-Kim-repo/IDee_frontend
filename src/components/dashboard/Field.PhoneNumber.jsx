import { Badge, Field, Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

const PhoneNumberField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Field.Root invalid={!!errors.phoneNumber}>
      <Field.Label>
        Phone Number{" "}
        <Field.RequiredIndicator
          fallback={
            <Badge size={"xs"} variant={"surface"}>
              Optional
            </Badge>
          }
        />
      </Field.Label>
      <Input
        {...register("phoneNumber")}
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        placeholder="(416) 234-5678"
        borderRadius="lg"
      />

      <Field.HelperText>
        Canadian numbers need no country code. Other countries: start with +
        (e.g. +82 10 1234 5678).
      </Field.HelperText>
      <Field.ErrorText>{errors.phoneNumber?.message}</Field.ErrorText>
    </Field.Root>
  );
};

export default PhoneNumberField;
