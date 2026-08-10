import { Box } from "@chakra-ui/react";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import IDCard from "../../../components/IDCard/IDCard";
import CardBackRenderer from "../../../components/IDCard/renderer/CardBackRenderer";
import CardFrontRenderer from "../../../components/IDCard/renderer/CardFrontRenderer";
import { buildCardData } from "./utils/buildCardData";

const DashboardReviewStep = () => {
  const { watch } = useFormContext();

  const formData = watch();

  const cardData = useMemo(() => buildCardData(formData), [formData]);

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
    >
      <IDCard
        front={() => <CardFrontRenderer data={cardData.front} />}
        back={() => <CardBackRenderer data={cardData.back} />}
      />
    </Box>
  );
};

export default DashboardReviewStep;
