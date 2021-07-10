import type { ComponentProps } from "@lucid/component";
import {
  Grid,
  GridItem,
  Box,
  useColorModeValue,
  GridItemProps,
  Flex,
} from "@chakra-ui/react";
import * as React from "react";
import type { Column } from "./column";

export function TableCell(props: GridItemProps) {
  return (
    <GridItem
      borderW="1px"
      borderColor={useColorModeValue("gray.400", "whiteAlpha.500")}
      {...props}
    />
  );
}

export interface TableProps extends ComponentProps {
  columns: Column[];
  data: any;
}
export function Table({ columns, data }: TableProps) {
  return (
    <Box>
      <Grid templateColumns={`repeat(${columns.length}, 1fr)`}>
        {data.map((x: any, i: number) =>
          columns.map((c) => (
            <TableCell key={`${i}_${c.id}`}>${x[i][c.id]}</TableCell>
          ))
        )}
      </Grid>
      <Flex
        bg={useColorModeValue("gray.300", "whiteAlpha.400")}
        justify="space-between"
        items="center"
        wrap="wrap"
      >
        <Box>{data.length} results</Box>
      </Flex>
    </Box>
  );
}
