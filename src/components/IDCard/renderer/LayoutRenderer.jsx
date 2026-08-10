import { Grid, GridItem } from "@chakra-ui/react";
import { Children } from "react";
import { layouts } from "../../../pages/Dashboard/Create/config/layouts";

const LayoutRenderer = ({ layoutType, children }) => {
  const selectedLayout = layouts.find((item) => item.value === layoutType);

  if (!layout) return null;

  const { layout } = selectedLayout.layout;

  return (
    <Grid
      templateColumns={layout.templateColumns}
      templateAreas={layout.areas}
      gap={4}
      h={"100%"}
    >
      {Children.map(children, (child, index) => (
        <GridItem key={index} area={`content${index}`}>
          {child}
        </GridItem>
      ))}
    </Grid>
  );
};

export default LayoutRenderer;
