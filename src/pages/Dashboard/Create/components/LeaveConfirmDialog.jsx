/**
 * LeaveConfirmDialog.jsx
 *
 * Confirmation dialog shown when the user tries to leave the create-dashboard wizard while there is unsaved input.
 *
 * It is a controlled component: the page owns the open/closed state (because only the page knows whether the form is dirty),
 * this component only renders the dialog.
 *
 * Props:
 *  - isOpen        : whether the dialg is visible
 *  - onClose       : called when the user chooses "Keep editing", presses ESC, or clicks the backdrop.
 *  - onConfirm     : called when the user chooses "Leave"
 */

import { Button, Dialog, Portal } from "@chakra-ui/react";

const LeaveConfirmDialog = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Dialog.Root
      role="alertdialog"
      open={isOpen}
      onOpenChange={(details) => {
        // Only react to closing; the page is the one that opens the dialog.
        if (!details.open) onClose();
      }}
      lazyMount
      unmountOnExit
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content bg={"dialogBg"}>
            <Dialog.Header>
              <Dialog.Title>Leave without creating your profile?</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body>
              What you have typed so far will be lost. You can create your
              profile any time later.
            </Dialog.Body>

            <Dialog.Footer>
              <Button type="button" variant={"outline"} onClick={onClose}>
                Keep editing
              </Button>
              <Button type="button" onClick={onConfirm}>
                Leave
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default LeaveConfirmDialog;
