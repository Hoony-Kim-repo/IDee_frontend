/**
 * BackgroundContentEditor.jsx
 *
 * Editor of ONE content slot of the card back: ac content type selector plus the editor of the selected type (see editorRegistry.js)
 *
 * Form value of a slot: backgroundContents.{index} = { type, data, drafts }
 *  - type    : "text" | "image" | "links" | "table" | "" (nothing chosen)
 *  - data    : the data of the CURRENT type
 *  - drafts  : what the user typed for the OTHER types of this slot, so that switching the type never throws their work away.
 *              It is only a helper for the UI: the Zod schema removes it before submitting.
 *
 * Props:
 *  - index : position of the slot in backgroundContents
 */
import { Stack } from "@chakra-ui/react";
import { useFormContext, useWatch } from "react-hook-form";
import ContentTypeSelector from "./ContentTypeSelector";
import { CONTENT_REGISTRY } from "./editorRegistry";

const BackgroundContentEditor = ({ index }) => {
  const { getValues, setValue } = useFormContext();

  const name = `backgroundContents.${index}`;
  const type = useWatch({ name: `${name}.type` });

  const handleTypeChange = (nextType) => {
    // Choosing the type that is already selected must change nothing.
    if (nextType === type) return;

    const current = getValues(name);

    // Keep what was typed for the current type...
    const drafts = { ...current.drafts };
    if (current.type) drafts[current.type] = current.data;

    // ...and restore what was typed earlier for the new type, if anything.
    const { [nextType]: restoredData, ...otherDrafts } = drafts;

    setValue(
      name,
      {
        type: nextType,
        data: restoredData ?? CONTENT_REGISTRY[nextType].defaultData,
        drafts: otherDrafts,
      },
      // Tell the form that something changed ("Do this later" asks first).
      { shouldDirty: true },
    );
  };

  const Editor = CONTENT_REGISTRY[type]?.editor;

  return (
    <Stack gap={3} mt={2}>
      <ContentTypeSelector value={type} onChange={handleTypeChange} />

      {/* Nothing is rendered until a type is chosen. */}
      {Editor && <Editor index={index} />}
    </Stack>
  );
};

export default BackgroundContentEditor;
