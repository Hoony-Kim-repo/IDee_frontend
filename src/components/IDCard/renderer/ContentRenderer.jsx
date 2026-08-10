import CONTENT_RENDERERS from "./contentRegistry";

const ContentRenderer = ({ content }) => {
  if (!content?.type) return null;

  const Renderer = CONTENT_RENDERERS[content.type];

  if (!Renderer) return null;

  return <Renderer content={content} />;
};

export default ContentRenderer;
