import LinksField from "../../../../../components/dashboard/Field.Links";

// This component provides the form editor for a list of external links.
const LinksContentEditor = ({ index }) => {
  return (
    <LinksField name={`backgroundContents.${index}.data.links`} maxLinks={3} />
  );
};

export default LinksContentEditor;
