import { Box, Button, ButtonGroup, Steps } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import BackgroundContentStep from "./Create/BackgroundContentStep";
import BackgroundLayoutStep from "./Create/BackgroundLayoutStep";
import DashboardReviewStep from "./Create/DashboardReviewStep";
import ProfileBrandingStep from "./Create/ProfileBrandingStep";
import ProfileHighlightStep from "./Create/ProfileHighlightStep";
import ProfileIdentityStep from "./Create/ProfileIdentityStep";

const STEPS = [
  {
    id: "identity",
    title: "Basic Information",
    component: ProfileIdentityStep,
    optional: false,
  },
  {
    id: "branding",
    title: "Profile Branding",
    component: ProfileBrandingStep,
    optional: true,
  },
  {
    id: "hightlight",
    title: "Profile Hightlight",
    component: ProfileHighlightStep,
    optional: true,
  },
  {
    id: "backgroundLayout",
    title: "Background Layout",
    component: BackgroundLayoutStep,
    optional: false,
  },
  {
    id: "backgroundContent",
    title: "Background Contents",
    component: BackgroundContentStep,
    optional: false,
  },
  {
    id: "review",
    title: "Dashboard Review",
    component: DashboardReviewStep,
    optional: false,
  },
];

const CreateDashboardTwo = () => {
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

  const onSubmit = (data) => {
    console.log("Final Form Data: ", data);

    // API
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
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Steps.Root defaultStep={0} count={STEPS.length}>
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

              <Steps.CompletedContent>
                All steps are complete!
              </Steps.CompletedContent>

              <ButtonGroup size={"lg"} variant={"outline"}>
                <Steps.PrevTrigger asChild>
                  <Button>Prev</Button>
                </Steps.PrevTrigger>
                <Steps.NextTrigger asChild>
                  <Button>Next</Button>
                </Steps.NextTrigger>
              </ButtonGroup>
            </Steps.Root>
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
};

export default CreateDashboardTwo;
