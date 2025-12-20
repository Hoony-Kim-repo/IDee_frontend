import { Button, Spinner, Text } from "@chakra-ui/react";

const SubmitButton = ({
  disabledCondition,
  borderRadius,
  loading,
  children,
  ...props
}) => {
  return (
    <Button
      borderRadius={borderRadius}
      disabled={disabledCondition || loading}
      type="submit"
      {...props}
    >
      {loading ? (
        <Spinner size="lg" borderWidth={"4px"} />
      ) : (
        <Text textStyle={"lg"}>{children}</Text>
      )}
    </Button>
  );
};

export default SubmitButton;
