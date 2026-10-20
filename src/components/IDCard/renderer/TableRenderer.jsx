import { Box, Heading, Table, Text } from "@chakra-ui/react";

// Show readable table component on User's ID Card.
const TableRenderer = ({ content }) => {
  const data = content?.data;

  const title = data?.title ?? "";
  const columns = Array.isArray(data?.columns) ? data.columns : [];
  const rows = Array.isArray(data?.rows) ? data.rows : [];

  // Do not render a table when no valid columns are available.
  if (columns.length === 0) {
    return (
      <Text fontSize={"sm"} color={"fg.muted"}>
        No table data available.
      </Text>
    );
  }

  return (
    <Box w={"100%"} minW={"0"} overflowX={"auto"}>
      {title && (
        <Heading size={"sm"} mb={"3"}>
          {title}
        </Heading>
      )}

      <Table.Root size={"sm"} variant={"outline"} minW={"max-content"}>
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.ColumnHeader key={column.key}>
                {column.label}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {rows.map((row, idx) => (
            <Table.Row key={row.id ?? idx}>
              {columns.map((column) => (
                <Table.Cell key={column.key}>
                  {String(row?.[column.key] ?? "")}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default TableRenderer;
