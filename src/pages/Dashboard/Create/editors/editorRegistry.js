import ImageContentEditor from "./types/ImageContentEditor";
import LinksContentEditor from "./types/LinksContentEditor";
import TextContentEditor from "./types/TextContentEditor";

export const CONTENT_REGISTRY = {
  text: {
    label: "Text",
    description: "Pragraph or description",
    editor: TextContentEditor,
    defaultData: {
      text: "",
    },
  },
  image: {
    label: "Image",
    description: "Upload an image",
    editor: ImageContentEditor,
    defaultData: {
      url: "",
    },
  },
  links: {
    label: "Links",
    description: "List of external Links",
    editor: LinksContentEditor,
    defaultData: {
      links: [],
    },
  },
};
