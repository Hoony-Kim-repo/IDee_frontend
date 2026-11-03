/**
 * WizardFooter.jsx
 *
 * Button row at the bottom of the create-dashboard wizard.
 *  [Do this later]                     [Prev] [Next | Create Profile]
 *
 * This is a presentational component: no state, no hooks.
 * The page decides WHAT happens, this component only decides how to buttons look.
 *
 * Props:
 *  - isFirstSep: hides the Prev button
 *  - isLastStep: shows the submit button instead of Next
 *  - onLeave   : "Do this later" clicked
 *  - onPrev    : Prev clicked
 *  - onNext    : Next clicked
 *
 * The submit button submits the surrounding <form> because it is rendered inside it in the DOM
 * even though it lives in a different component file.
 */

import { Button, ButtonGroup, Flex } from "@chakra-ui/react";

const WizardFooter = ({ isFirstStep, isLastStep, onLeave, onPrev, onNext }) => {
  const keepInputFocus = (event) => event.preventDefault();

  return (
    <Flex justify={"space-between"} align={"center"} mt={"8"}>
      {/* Kept apart from Prev/Next so it is not clicked by accident */}
      <Button
        type="button"
        variant={"ghost"}
        onClick={onLeave}
        onMouseDown={keepInputFocus}
      >
        Do this later
      </Button>

      <ButtonGroup size={"lg"} variant={"outline"}>
        {!isFirstStep && (
          <Button
            key={"prev"}
            type="button"
            onMouseDown={keepInputFocus}
            onClick={onPrev}
          >
            Prev
          </Button>
        )}

        {/* Different keys force React to create two separate DOM buttons.
            without them React would reuse one <button> and only flip its type form "button" to "submit",
            which can submit the form during the same click on "Next". */}
        {isLastStep ? (
          <Button
            key={"submit"}
            type="submit"
            variant={"solid"}
            onMouseDown={keepInputFocus}
          >
            Create Profile
          </Button>
        ) : (
          <Button
            key={"next"}
            type="button"
            onMouseDown={keepInputFocus}
            onClick={onNext}
          >
            Next
          </Button>
        )}
      </ButtonGroup>
    </Flex>
  );
};

export default WizardFooter;
