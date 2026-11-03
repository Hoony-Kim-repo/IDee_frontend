import {
  Box,
  Button,
  ButtonGroup,
  Dialog,
  Flex,
  Portal,
  Steps,
} from "@chakra-ui/react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import BackgroundContentStep from "./Create/BackgroundContentStep";
import BackgroundLayoutStep from "./Create/BackgroundLayoutStep";
import DashboardReviewStep from "./Create/DashboardReviewStep";
import ProfileBrandingStep from "./Create/ProfileBrandingStep";
import ProfileHighlightStep from "./Create/ProfileHighlightStep";
import ProfileIdentityStep from "./Create/ProfileIdentityStep";

/**
 * CreateDashboard.jsx
 * --------------------------------------------------------
 * Multi-step wizard page for creating a user's first profile (ID card).
 * Route: /dashboard/create
 *
 * Responsibilities of this file:
 * - owns the form state (React Hook Form) shared by every step
 * - owns the current step index (controlled Chakra Steps)
 * - validates only the CURRENT step before moving forward
 * - shows Prev / Next / Submit buttons depending on the step
 * - lets the user leave the wizard ("Do this later"), asking for confirmation first if they already typed something.
 *
 * NOTE: The API call is intentionally not connected yet.
 */

// 'fields' lists the form field names that belong to each step.
// They are validated when the user presses "Next", and they are used to
// jump back to the right step if the final submit finds an error.
// TODO: fill in 'fields' for the other steps when we review each of them.
const STEPS = [
  {
    id: "identity",
    title: "Basic Information",
    component: ProfileIdentityStep,
    fields: ["fullName", "nickName", "phoneNumber", "dob", "jobTitle"],
  },
  {
    id: "branding",
    title: "Profile Branding",
    component: ProfileBrandingStep,
    fields: [],
  },
  {
    id: "hightlight",
    title: "Profile Hightlight",
    component: ProfileHighlightStep,
    fields: [],
  },
  {
    id: "backgroundLayout",
    title: "Background Layout",
    component: BackgroundLayoutStep,
    fields: [],
  },
  {
    id: "backgroundContent",
    title: "Background Contents",
    component: BackgroundContentStep,
    fields: [],
  },
  {
    id: "review",
    title: "Dashboard Review",
    component: DashboardReviewStep,
    fields: [],
  },
];

const LAST_STEP_INDEX = STEPS.length - 1;

const CreateDashboardTwo = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [isLeaveDialogOpen, setIsLeaveDialogOpen] = useState(false);

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      nickName: "",
      phoneNumber: "",
      dob: "",
      jobTitle: "",
      bio: "",
      profilePicture: undefined,
      links: [{ title: "", url: "" }],
      tags: [{ tagTitle: "", items: [] }],
      backgroundLayout: "single",
      backgroundContents: [
        {
          type: "",
          data: {},
        },
      ],
    },
  });

  // True once the user has changed anything compared to the default values.
  const { isDirty } = methods.formState;

  const isFirstStep = step === 0;
  const isLastStep = step === LAST_STEP_INDEX;

  // "Next": validate only the fields of the current step, then move on.
  const handleNext = async () => {
    const fields = STEPS[step].fields;

    // shouldFocus moves the cursor to the first invalid field.
    const isValid =
      fields.length === 0
        ? true
        : await methods.trigger(fields, { shouldFocus: true });

    console.log(isValid);
    if (!isValid) return;

    setStep((current) => Math.min(current + 1, LAST_STEP_INDEX));
  };

  const handlePrev = () => {
    setStep((current) => Math.max(current - 1, 0));
  };

  // "Do this later": ask first if there is unsaved input.
  const handleLeave = () => {
    if (isDirty) setIsLeaveDialogOpen(true);
    else navigate("/");
  };

  const handleConfirmLeave = () => {
    setIsLeaveDialogOpen(false);
    navigate("/");
  };

  const onSubmit = (data) => {
    console.log("Final Form Data: ", data);

    // API
  };

  // Called when the final submit finds errors. Send the user back to the first step that
  // contains an invalid field, because errors in a hidden step would otherwise look like "nothing happened".
  const onInvalid = (errors) => {
    const invalidStepIndex = STEPS.findIndex((s) =>
      s.fields.some((field) => field in errors),
    );

    if (invalidStepIndex !== -1) setStep(invalidStepIndex);
    else
      console.warn("Submit blocked by fields that no step owns yet:", errors);
  };

  const handleFormSubmit = (event) => {
    // Only the last step is allowed to submit (e.g. Enter key on step 1 is ignored)
    if (!isLastStep) {
      event.preventDefault();
      return;
    }

    return methods.handleSubmit(onSubmit, onInvalid)(event);
  };

  // Keep the focus inside the input while the mouse is pressed.
  // A mouse press on a button normally blurs the focused input first.
  // preventDefault() on mousedown stops that blur, so blur validation does not run
  // (and no error text shifts the layout) before the click is delivered.
  const keepInputFocus = (event) => event.preventDefault();

  return (
    <Box
      backgroundGradient={"to-r"}
      gradientFrom={"dashboardHeroStart"}
      gradientTo={"dashboardHeroEnd"}
      py={"6"}
      px={"6"}
    >
      <Box
        backgroundColor={"dashboardCardBg"}
        borderRadius={"2xl"}
        p={"10"}
        maxW={"100%"}
        mx={"auto"}
        boxShadow={"xl"}
        backdropFilter={"blur(10px)"}
      >
        <FormProvider {...methods}>
          {/* noValidate: disable the browser's own validation bubbles, React Hook Form is the single source of validation. */}
          <form noValidate onSubmit={handleFormSubmit}>
            <Steps.Root
              step={step}
              onStepChange={(details) => setStep(details.step)}
              count={STEPS.length}
            >
              <Steps.List>
                {STEPS.map((step, index) => (
                  <Steps.Item key={step.id} index={index} title={step.title}>
                    <Steps.Indicator />
                    <Steps.Title>{step.title}</Steps.Title>
                    <Steps.Separator />
                  </Steps.Item>
                ))}
              </Steps.List>

              {STEPS.map((step, index) => (
                <Steps.Content key={step.id} index={index}>
                  <step.component />
                </Steps.Content>
              ))}

              <Flex justify={"space-between"} align={"center"} mt={"8"}>
                {/* Kept apart from Prev/Next so it is not clicked by accident */}
                <Button
                  type="button"
                  variant={"ghost"}
                  onClick={handleLeave}
                  onMouseDown={keepInputFocus}
                >
                  Do this later
                </Button>

                <ButtonGroup size={"lg"} variant={"outline"}>
                  {!isFirstStep && (
                    <Button key={"prev"} type="button" onClick={handlePrev}>
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
                    <Button key={"next"} type="button" onClick={handleNext}>
                      Next
                    </Button>
                  )}
                </ButtonGroup>
              </Flex>

              {/* <Steps.CompletedContent>
                All steps are complete!
              </Steps.CompletedContent> */}

              {/* <ButtonGroup size={"lg"} variant={"outline"}>
                <Steps.PrevTrigger asChild>
                  <Button>Prev</Button>
                </Steps.PrevTrigger>
                <Steps.NextTrigger asChild>
                  <Button>Next</Button>
                </Steps.NextTrigger>
              </ButtonGroup> */}
            </Steps.Root>
          </form>
        </FormProvider>
      </Box>

      {/* Confirmation dialog shown when leaving with unsaved input. */}
      <Dialog.Root
        role="alertdialog"
        open={isLeaveDialogOpen}
        onOpenChange={(details) => setIsLeaveDialogOpen(details.open)}
        lazyMount
        unmountOnExit
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content bg={"dialogBg"}>
              <Dialog.Header>
                <Dialog.Title>
                  Leave without creating your profile?
                </Dialog.Title>
              </Dialog.Header>

              <Dialog.Body>
                What you have typed so far will be lost. You can create your
                profile any time later.
              </Dialog.Body>

              <Dialog.Footer>
                <Button
                  type="button"
                  variant={"outline"}
                  onClick={() => setIsLeaveDialogOpen(false)}
                >
                  Keep editing
                </Button>
                <Button type="button" onClick={handleConfirmLeave}>
                  Leave
                </Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Box>
  );
};

export default CreateDashboardTwo;
