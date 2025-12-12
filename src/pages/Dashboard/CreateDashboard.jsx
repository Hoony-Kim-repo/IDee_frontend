import {
  Box,
  Button,
  Field,
  Fieldset,
  FileUpload,
  Grid,
  Heading,
  Input,
  Spinner,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { LuFileImage } from "react-icons/lu";
import FileUploadPreview from "../../components/dashboard/FileUploadPreview";

const CreateDashboard = () => {
  const [errors, setErrors] = useState({ name: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
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

    setLoading(false);
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
                  <Field.Root required>
                    <Field.Label>
                      Full Name <Field.RequiredIndicator />
                    </Field.Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      borderRadius="lg"
                    />
                    <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
                  </Field.Root>
                </Fieldset.Content>

                <Fieldset.Content>
                  <Field.Root>
                    <Field.Label>Nickname (Preferred Name)</Field.Label>
                    <Input
                      id="nickname"
                      name="nickname"
                      type="text"
                      placeholder="Enter your nickname"
                      borderRadius="lg"
                    />
                  </Field.Root>
                </Fieldset.Content>

                <Fieldset.Content>
                  <Field.Root>
                    <Field.Label>Phone Number</Field.Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      placeholder="Enter your Phone Number"
                      borderRadius="lg"
                    />
                  </Field.Root>
                </Fieldset.Content>

                <Fieldset.Content>
                  <Field.Root>
                    <Field.Label>Date of Birth</Field.Label>
                    <Input
                      id="dob"
                      name="dob"
                      type="date"
                      placeholder="Enter your Date of Birth"
                      borderRadius="lg"
                    />
                  </Field.Root>
                </Fieldset.Content>

                <Fieldset.Content>
                  <Field.Root>
                    <Field.Label>Profile Picture</Field.Label>
                    <FileUpload.Root>
                      <FileUpload.HiddenInput name="profilePicture" />
                      <FileUpload.Trigger asChild>
                        <Button as={"div"} variant="solid" borderRadius="lg">
                          <LuFileImage /> Upload Profile Picture
                        </Button>
                      </FileUpload.Trigger>
                      <FileUploadPreview />
                    </FileUpload.Root>
                  </Field.Root>
                </Fieldset.Content>

                <Fieldset.Content gridColumn={{ base: "span 1", md: "span 2" }}>
                  <Field.Root>
                    <Field.Label>Bio</Field.Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      placeholder="I am..."
                      borderRadius={"lg"}
                    />
                    <Field.HelperText>
                      A short description of yourself
                    </Field.HelperText>
                  </Field.Root>
                </Fieldset.Content>

                <Fieldset.Content gridColumn={{ base: "span 1", md: "span 2" }}>
                  <Button
                    borderRadius={"lg"}
                    disabled={errors.name === ""}
                    type="submit"
                  >
                    {loading ? (
                      <Spinner size="lg" borderWidth={"4px"} />
                    ) : (
                      <Text textStyle={"lg"}>Create Profile</Text>
                    )}
                  </Button>
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
