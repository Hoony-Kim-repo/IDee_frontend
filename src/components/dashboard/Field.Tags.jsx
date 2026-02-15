import { Box, Button, Text, VStack } from "@chakra-ui/react";
import TagList from "./TagList";

const TagsField = ({ tags, setTags, errors }) => {
  const onAddTagList = () => {
    if (tags.length >= 2) return;

    setTags((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name: "Tag", items: [] },
    ]);
  };

  const onRemoveTagList = (id) => {
    setTags((prev) => prev.filter((tag) => tag.id !== id));
  };

  // Tag List Change detect
  const onUpdateTag = (updatedTag) => {
    setTags((prev) =>
      prev.map((tag) => (tag.id === updatedTag.id ? updatedTag : tag)),
    );
  };

  return (
    <div>
      <VStack align={"start"}>
        {tags.map((tag) => (
          <Box key={tag.id}>
            <TagList tag={tag} onChange={onUpdateTag} />
            <Button onClick={() => onRemoveTagList(tag.id)}>Delete</Button>
          </Box>
        ))}
      </VStack>

      {tags.length < 2 && <Button onClick={onAddTagList}>Add Tag</Button>}
      {tags.length >= 2 && <Text>You can add up to 2 tag groups.</Text>}
      {errors && <Text color={"red.500"}>{errors.tags?.message}</Text>}
    </div>
  );
};

export default TagsField;
