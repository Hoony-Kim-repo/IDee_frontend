import { Box, Steps } from "@chakra-ui/react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LeaveConfirmDialog from "./Create/components/LeaveConfirmDialog";
import WizardFooter from "./Create/components/WizardFooter";
import { DEFAULT_VALUES } from "./Create/config/defaultValues";
import { STEPS } from "./Create/config/steps";
import { useWizardNavigation } from "./Create/hooks/useWizardNavigation";

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

const CreateDashboardTwo = () => {
  const navigate = useNavigate();

  const [isLeaveDialogOpen, setIsLeaveDialogOpen] = useState(false);

  const methods = useForm({
    mode: "onBlur",
    defaultValues: DEFAULT_VALUES,
  });

  const { step, isFirstStep, isLastStep, goToNext, goToPrev, goToStep } =
    useWizardNavigation({ steps: STEPS, trigger: methods.trigger });

  // True once the user has changed anything compared to the default values.
  const { isDirty } = methods.formState;

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

    if (invalidStepIndex !== -1) goToStep(invalidStepIndex);
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
              onStepChange={(details) => goToStep(details.step)}
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

              <WizardFooter
                isFirstStep={isFirstStep}
                isLastStep={isLastStep}
                onLeave={handleLeave}
                onPrev={goToPrev}
                onNext={goToNext}
              />
            </Steps.Root>
          </form>
        </FormProvider>
      </Box>

      <LeaveConfirmDialog
        isOpen={isLeaveDialogOpen}
        onClose={() => setIsLeaveDialogOpen(false)}
        onConfirm={handleConfirmLeave}
      />
    </Box>
  );
};

export default CreateDashboardTwo;
