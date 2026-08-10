import {
  GridLayoutPreview,
  LeftRightLayoutPreview,
  SingleLayoutPreview,
  TopBottomLayoutPreview,
  TopOneBottomTwoLayoutPreview,
  TopTowBottomOneLayoutPreview,
} from "../../../../components/dashboard/LayoutPreviews";

/**
 * Layout schema definition
 *
 * Layout = UI Schema
 *
 * Controls:
 * - number of editors
 * - editor placement
 * - preview renderer
 * - future viewer renderer
 * - future serializer structure
 */

const layouts = [
  {
    value: "single",
    title: "1 Content",
    description: "One content section",
    preview: SingleLayoutPreview,
    addText:
      "Best suited for highlighting a single piece of content with maximum visual focus.",
    slots: [
      {
        id: "content0",
        label: "Content",
      },
    ],
    layout: {
      templateColumns: "1fr",
      rowCounts: "1",
      areas: `
        "content0"
      `,
    },
  },
  {
    value: "top-bottom",
    title: "2 Contents (Top / Bottom)",
    description: "Stacked vertically",
    preview: TopBottomLayoutPreview,
    addText:
      "Ideal for presenting a primary section followed by supporting information in a clear vertical flow.",
    slots: [
      {
        id: "content0",
        label: "Top",
      },
      {
        id: "content1",
        label: "Bottom",
      },
    ],
    layout: {
      templateColumns: "1fr",
      rowCounts: "2",
      areas: `
        "content0"
        "content1"
      `,
    },
  },
  {
    value: "left-right",
    title: "2 Contents (Left / Right)",
    description: "Side by side",
    preview: LeftRightLayoutPreview,
    addText:
      "Perfect for displaying contents side-by-side, making comparisons and relationships easy to understand.",
    slots: [
      {
        id: "content0",
        label: "Left",
      },
      {
        id: "content1",
        label: "Right",
      },
    ],
    layout: {
      templateColumns: "1fr 1fr",
      rowCounts: "1",
      areas: `
        "content0 content1"
      `,
    },
  },
  {
    value: "top-2-bottom",
    title: "3 Contents (1 top, 2 bottom)",
    description: "Top focus layout",
    preview: TopOneBottomTwoLayoutPreview,
    addText:
      "Emphasizes a key feature at the top while allowing additional details or items to be presented below.",
    slots: [
      {
        id: "content0",
        label: "Top",
      },
      {
        id: "content1",
        label: "Bottom Left",
      },
      {
        id: "content2",
        label: "Bottom Right",
      },
    ],
    layout: {
      templateColumns: "1fr 1fr",
      rowCounts: "2",
      areas: `
        "content0 content0"
        "content1 content2"
      `,
    },
  },
  {
    value: "top-bottom-2",
    title: "3 Contents (2 top, 1 bottom)",
    description: "Bottom focus layout",
    preview: TopTowBottomOneLayoutPreview,
    addText:
      "Highlights two primary elements while reserving space below for supporting content or a summary.",
    slots: [
      {
        id: "content0",
        label: "Top Left",
      },
      {
        id: "content1",
        label: "Top Right",
      },
      {
        id: "content2",
        label: "Bottom",
      },
    ],
    layout: {
      templateColumns: "1fr 1fr",
      rowCounts: "2",
      areas: `
        "content0 content1"
        "content2 content2"
      `,
    },
  },
  {
    value: "grid",
    title: "4 Contents",
    description: "Grid Layout",
    preview: GridLayoutPreview,
    addText:
      "Provides a balanced layout for organizing multiple pieces of content in a structured grid.",
    slots: [
      {
        id: "content0",
        label: "Top Left",
      },
      {
        id: "content1",
        label: "Top Right",
      },
      {
        id: "content2",
        label: "Bottom Left",
      },
      {
        id: "content3",
        label: "Bottom Right",
      },
    ],
    layout: {
      templateColumns: "1fr 1fr",
      rowCounts: "2",
      areas: `
        "content0 content1"
        "content2 content3"
      `,
    },
  },
];

export { layouts };
