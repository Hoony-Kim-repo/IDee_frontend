import { Field, Input, Text } from "@chakra-ui/react";

const EmailAuthField = (props) => {
  const {
    label,
    required,
    id,
    name,
    type,
    value,
    onChange,
    placeholder,
    children,
    error,
  } = props;

  return (
    <Field.Root required={required}>
      <Field.Label>
        {label} <Field.RequiredIndicator />
      </Field.Label>
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
      {children}
      {error && (
        <Text color={"red.500"} fontSize={"sm"}>
          {error}
        </Text>
      )}
    </Field.Root>
  );
};

export default EmailAuthField;
