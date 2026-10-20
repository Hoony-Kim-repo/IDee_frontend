import { Grid, GridItem } from "@chakra-ui/react";
import { Children } from "react";
import { layouts } from "../../../pages/Dashboard/Create/config/layouts";

// Render card contents according to the selected layout configuration.
const LayoutRenderer = ({ layoutType, children }) => {
  const selectedLayout = layouts.find((item) => item.value === layoutType);

  // Handle missing or invalid layout configurations.
  if (!selectedLayout) return null;

  const { templateColumns, templateRows, areas } = selectedLayout.layout;

  return (
    <Grid
      templateColumns={templateColumns}
      templateRows={templateRows}
      templateAreas={areas}
      gap={4}
      h={"100%"}
      minW={0}
      minH={0}
    >
      {Children.map(children, (child, index) => (
        <GridItem key={index} area={`content${index}`} minH={0} minW={0}>
          {child}
        </GridItem>
      ))}
    </Grid>
  );
};

export default LayoutRenderer;
