import CardContainer from "../CardContainer";
import LayoutRenderer from "./LayoutRenderer";

const CardBackRenderer = ({ data }) => {
  if (!data) return null;

  const { backgroundImage, layoutType, backgroundContents } = data;

  return (
    <CardContainer bgImage={backgroundImage}>
      <LayoutRenderer
        layoutType={layoutType}
        backgroundContents={backgroundContents}
      />
    </CardContainer>
  );
};

export default CardBackRenderer;
