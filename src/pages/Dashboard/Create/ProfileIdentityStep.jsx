import { Fieldset, Grid } from "@chakra-ui/react";
import DateOfBirthField from "../../../components/dashboard/Field.DOB";
import FullNameField from "../../../components/dashboard/Field.FullName";
import JobTitleField from "../../../components/dashboard/Field.JobTitle";
import NicknameField from "../../../components/dashboard/Field.Nickname";
import PhoneNumberField from "../../../components/dashboard/Field.PhoneNumber";

const ProfileIdentityStep = () => {
  return (
    <Fieldset.Root>
      {/* Gives the group an accessible name for screen readers.
          The wizzard header already shows this title, so hide it visually. */}
      <Fieldset.Legend srOnly>Basic Information</Fieldset.Legend>

      <Fieldset.Content>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
          <FullNameField />
          <NicknameField />

          <PhoneNumberField />
          <DateOfBirthField />

          <JobTitleField />
        </Grid>
      </Fieldset.Content>
    </Fieldset.Root>
  );
};

export default ProfileIdentityStep;
