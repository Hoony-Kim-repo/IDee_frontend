import ImageRenderer from "./ImageRenderer";
import LinksRenderer from "./LinksRenderer";
import TableRenderer from "./TableRenderer";
import TextRenderer from "./TextRenderer";

// This registry maps content types to their corresponding card renderer components.
const CONTENT_RENDERERS = {
  text: TextRenderer,
  image: ImageRenderer,
  links: LinksRenderer,
  table: TableRenderer,
};

export default CONTENT_RENDERERS;
