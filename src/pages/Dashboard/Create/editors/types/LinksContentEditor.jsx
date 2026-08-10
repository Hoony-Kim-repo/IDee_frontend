import LinksField from "../../../../../components/dashboard/Field.Links";

const LinksContentEditor = ({ index }) => {
  return (
    <LinksField name={`backgroundContents.${index}.data.links`} maxLinks={3} />
  );
};

export default LinksContentEditor;
