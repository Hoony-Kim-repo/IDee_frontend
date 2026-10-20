import ImageContentEditor from "./types/ImageContentEditor";
import LinksContentEditor from "./types/LinksContentEditor";
import TableContentEditor from "./types/TableContentEditor";
import TextContentEditor from "./types/TextContentEditor";

// This registry defines the available content types and their editor configurations.
export const CONTENT_REGISTRY = {
  text: {
    label: "Text",
    description: "Paragraph or description",
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
  table: {
    label: "Table",
    description: "Structured data with editable rows and columns",
    editor: TableContentEditor,
    defaultData: {
      title: "",
      columns: [
        {
          key: "column_1",
          label: "Column 1",
        },
      ],
      rows: [],
    },
  },
};
