/**
 * useWizardNavigation.js
 *
 * Custom hook that owns the navigation rules of the wizard:
 *  - which step we are on
 *  - moving forward only if the current step is valid
 *  - moving backward
 *  - jumping to a specific step
 *
 * It knows nothing about how the steps look.
 * The page decides the UI, this hook decides the rules.
 *
 * Parameters:
 *  - steps     : the STEPS array (see config/steps.js)
 *  - trigger   : React Hook Form's 'trigger', passed in by the page.
 *                (We cannot call useFormContext here, because the page that renders <FormProvider> is not inside that provider yet.)
 */

import { useState } from "react";

export const useWizardNavigation = ({ steps, trigger }) => {
  const [step, setStep] = useState(0);

  const lastStepIndex = steps.length - 1;
  const isFirstStep = step === 0;
  const isLastStep = step === lastStepIndex;

  // "Next": validate only the fields of the current step, then move on.
  const goToNext = async () => {
    const fields = steps[step].fields;

    // trigger() returns a Promise<boolean>: true when every listed field passed its rules.
    // shouldFocus moves the cursor to the first invalid field.
    const isValid =
      fields.length === 0 ? true : await trigger(fields, { shouldFocus: true });

    if (!isValid) return;

    setStep((current) => Math.min(current + 1, lastStepIndex));
  };

  const goToPrev = () => {
    setStep((current) => Math.max(current - 1, 0));
  };

  const goToStep = (index) => {
    setStep(Math.min(Math.max(index, 0), lastStepIndex));
  };

  return {
    step,
    isFirstStep,
    isLastStep,
    goToNext,
    goToPrev,
    goToStep,
  };
};
