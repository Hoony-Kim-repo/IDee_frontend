import {
  Box,
  Button,
  CloseButton,
  Dialog,
  PinInput,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { compareVerificationCodeAction } from "../Actions";

const PinModal = ({ email, isOpen, onClose }) => {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", ""]);

  useEffect(() => {
    if (!isOpen) return;

    setCode(["", "", "", ""]);
  }, [isOpen]);

  const onPinComplete = async (e) => {
    const code = e.value.join("");
    const result = await compareVerificationCodeAction(email, code);

    if (result.data.success) {
      // Add user information to Database.
      navigate("/login");
    } else {
      // pass error message to SignupPage to show error message.
    }

    onClose();
  };

  return (
    <Dialog.Root open={isOpen}>
      <Portal>
        <Dialog.Positioner pointerEvents={"none"}>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Enter verification code</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body>
              <VStack wordSpacing={4}>
                <Box>
                  <Text>A 4-digit code has been sent to your email.</Text>
                  <Text>Check spam message if code not sent.</Text>
                </Box>

                <PinInput.Root
                  value={code}
                  onValueChange={(e) => setCode(e.value)}
                  onValueComplete={onPinComplete}
                >
                  <PinInput.HiddenInput />
                  <PinInput.Control>
                    <PinInput.Input index={0} />
                    <PinInput.Input index={1} />
                    <PinInput.Input index={2} />
                    <PinInput.Input index={3} />
                  </PinInput.Control>
                </PinInput.Root>
              </VStack>
            </Dialog.Body>

            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant={"outline"} onClick={onClose}>
                  Cancel
                </Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>

            <Dialog.CloseTrigger asChild>
              <CloseButton size={"sm"} onClick={onClose} />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default PinModal;
