import ImageRenderer from "./ImageRenderer";
import LinksRenderer from "./LinksRenderer";
import TextRenderer from "./TextRenderer";

const CONTENT_RENDERERS = {
  text: TextRenderer,
  image: ImageRenderer,
  links: LinksRenderer,
};

export default CONTENT_RENDERERS;
