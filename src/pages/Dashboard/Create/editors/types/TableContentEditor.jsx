import { Box, Button, Field, Input, Stack } from "@chakra-ui/react";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";

// Manage editable table content, including its title, columns, and rows.
const TableContentEditor = ({ index }) => {
  const { control, register } = useFormContext();

  const baseName = `backgroundContents.${index}.data`;

  // Manage the dynamic table columns array.
  const {
    fields: columnFields,
    append: appendColumn,
    remove: removeColumn,
  } = useFieldArray({ control, name: `${baseName}.columns` });

  // Manage the dynamic table rows array.
  const {
    fields: rowFields,
    append: appendRow,
    remove: removeRow,
    replace: replaceRows,
  } = useFieldArray({ control, name: `${baseName}.rows` });

  // Subscribe to the current column and row values.
  const columns = useWatch({ control, name: `${baseName}.columns` }) ?? [];

  const rows = useWatch({ control, name: `${baseName}.rows` }) ?? [];

  // Add a new column and create its cell in every existing row.
  const handleAddColumn = () => {
    const key = `column_${crypto.randomUUID()}`;

    appendColumn({
      key,
      label: `Column ${columnFields.length + 1}`,
    });

    replaceRows(
      rows.map((row) => ({
        ...row,
        [key]: "",
      })),
    );
  };

  // Remove a column and its corresponding cell from every row.
  const handleRemoveColumn = (index) => {
    const column = columns[index];

    if (!column) return;

    removeColumn(index);

    replaceRows(
      rows.map((row) => {
        const { [column.key]: _removedValue, ...remainingCells } = row;
        return remainingCells;
      }),
    );
  };

  // Add a row containing one empty cell for each current columns
  const handleAddRow = () => {
    const newRow = Object.fromEntries(
      columns.map((column) => [column.key, ""]),
    );

    appendRow(newRow);
  };

  return (
    <Stack gap={6}>
      {/* Table Title */}
      <Field.Root>
        <Field.Label>Table Title</Field.Label>
        <Input
          {...register(`${baseName}.title`)}
          placeholder="Enter table title"
        />
      </Field.Root>

      {/* Columns configuration*/}
      <Box>
        <Field.Root>
          <Field.Label>Columns</Field.Label>
        </Field.Root>

        <Stack gap={3} mt={3}>
          {columnFields.map((column, columnIndex) => (
            <Box key={column.id} display={"flex"} gap={3} alignItems={"center"}>
              <Input
                {...register(`${baseName}.columns.${columnIndex}.label`)}
                placeholder="Column name"
              />
              <Button
                type="button"
                variant={"outline"}
                onClick={() => handleRemoveColumn(columnIndex)}
              >
                Remove
              </Button>
            </Box>
          ))}

          <Button type="button" variant={"outline"} onClick={handleAddColumn}>
            Add Column
          </Button>
        </Stack>
      </Box>

      {/* Rows and cell configuration */}
      <Box>
        <Field.Root>
          <Field.Label>Rows</Field.Label>
        </Field.Root>

        <Stack gap={4} mt={3}>
          {rowFields.map((row, rowIndex) => (
            <Box key={row.id} borderWidth={"1px"} borderRadius={"md"} p={"4"}>
              <Stack gap={3}>
                {columns.map((column) => (
                  <Field.Root key={column.key}>
                    <Field.Label>{column.label}</Field.Label>

                    <Input
                      {...register(
                        `${baseName}.rows.${rowIndex}.${column.key}`,
                      )}
                      placeholder={`Enter ${column.label.toLowerCase()}`}
                    />
                  </Field.Root>
                ))}

                <Button
                  type="button"
                  variant={"outline"}
                  onClick={() => removeRow(rowIndex)}
                >
                  Remove Row
                </Button>
              </Stack>
            </Box>
          ))}

          <Button
            type="button"
            onClick={handleAddRow}
            disabled={columns.length === 0}
          >
            Add Row
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default TableContentEditor;
