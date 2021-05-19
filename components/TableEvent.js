import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

function TableEvent() {
  return (
    <Table variant="simple" size="sm">
      <Thead>
        <Tr>
          <Th>No.</Th>
          <Th>Title</Th>
          <Th>Location</Th>
          <Th>Date</Th>
          <Th>Participant</Th>
          <Th>Note</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>1</Td>
          <Td>Meeting With CEO</Td>
          <Td>Pisangan timur, jakarta</Td>
          <Td>17 Agustus 2020</Td>
          <Td>Rio Jainadi, Dimas P., Raditsian</Td>
          <Td noOfLines={4}>
            lacus sed turpis tincidunt id aliquet risus feugiat in ante metus
            dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non
            odio euismod lacinia at quis risus sed vulputate odio ut enim
            blandit volutpat maecenas volutpat blandit aliquam etiam erat velit
            scelerisque in dictum non consectetur a erat nam
          </Td>
        </Tr>
        <Tr>
          <Td>2</Td>
          <Td>Meeting With CEO</Td>
          <Td>Pisangan timur, jakarta</Td>
          <Td>17 Agustus 2020</Td>
          <Td>Rio Jainadi, Dimas P., Raditsian</Td>
          <Td noOfLines={4}>
            lacus sed turpis tincidunt id aliquet risus feugiat in ante metus
            dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non
            odio euismod lacinia at quis risus sed vulputate odio ut enim
            blandit volutpat maecenas volutpat blandit aliquam etiam erat velit
            scelerisque in dictum non consectetur a erat nam
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

export default TableEvent;
