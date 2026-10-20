import CardContainer from "../CardContainer";
import LayoutRenderer from "./LayoutRenderer";
import CONTENT_RENDERERS from "./contentRendererRegistry";

const CardBackRenderer = ({ data }) => {
  if (!data) return null;

  const { backgroundImage, layoutType, backgroundContents } = data;

  const contents = Array.isArray(backgroundContents) ? backgroundContents : [];

  return (
    <CardContainer bgImage={backgroundImage}>
      <LayoutRenderer layoutType={layoutType}>
        {contents.map((content, index) => {
          const ContentRenderer = CONTENT_RENDERERS[content?.type];

          // Skip content types without a registered renderer.
          if (!ContentRenderer) return null;

          return (
            <ContentRenderer
              key={`${content.type}-${index}`}
              content={content}
            />
          );
        })}
      </LayoutRenderer>
    </CardContainer>
  );
};

export default CardBackRenderer;
