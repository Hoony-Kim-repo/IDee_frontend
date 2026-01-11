import { Box, Fieldset, Grid, Heading, VStack } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { createProfile } from "../../api/profile";
import SubmitButton from "../../components/common/SubmitButton";
import BioField from "../../components/dashboard/Field.Bio";
import DateOfBirthField from "../../components/dashboard/Field.DOB";
import FullNameField from "../../components/dashboard/Field.FullName";
import NicknameField from "../../components/dashboard/Field.Nickname";
import PhoneNumberField from "../../components/dashboard/Field.PhoneNumber";
import ProfilePictureField from "../../components/dashboard/Field.ProfilePicture";
import { QUERY_KEYS } from "../../constants/queryKeys";

const CreateDashboard = () => {
  const [errors, setErrors] = useState({ name: "" });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createProfile,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: QUERY_KEYS.PROFILE });

      navigate("/", { replace: true });
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setErrors({ name: "" });

    const formData = new FormData(e.currentTarget);
    const fullName = formData.get("fullName")?.trim();

    let hasError = false;
    const newErrors = {};

    if (!fullName || fullName.length < 3) {
      newErrors.name = { message: "Invalid name" };
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    try {
      await mutateAsync(formData);
    } catch (err) {
      console.error("Upload error", err);
    } finally {
      setLoading(false);
    }
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
        <Heading mb={"6"} textAlign={"center"} fontFamily={"cursive"}>
          Create Your IDee Profile
        </Heading>

        <form onSubmit={onSubmit}>
          <VStack>
            <Fieldset.Root>
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
                <Fieldset.Content>
                  <FullNameField errors={errors} />
                </Fieldset.Content>

                <Fieldset.Content>
                  <NicknameField />
                </Fieldset.Content>

                <Fieldset.Content>
                  <PhoneNumberField />
                </Fieldset.Content>

                <Fieldset.Content>
                  <DateOfBirthField />
                </Fieldset.Content>

                <Fieldset.Content>
                  <ProfilePictureField />
                </Fieldset.Content>

                <Fieldset.Content gridColumn={{ base: "span 1", md: "span 2" }}>
                  <BioField />
                </Fieldset.Content>

                <Fieldset.Content gridColumn={{ base: "span 1", md: "span 2" }}>
                  <SubmitButton
                    borderRadius={"lg"}
                    disabledCondition={loading || isPending}
                    loading={loading}
                  >
                    Create Profile
                  </SubmitButton>
                </Fieldset.Content>
              </Grid>
            </Fieldset.Root>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default CreateDashboard;
