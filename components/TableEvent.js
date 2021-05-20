/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

function TableEvent({data}) {
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
        {data.map((item, index) => (
          <Tr key={index}>
            <Td>{index + 1}</Td>
            <Td>{item.title}</Td>
            <Td>{item.location}</Td>
            <Td>{item.date}</Td>
            <Td>{item.participant.toString()}</Td>
            <Td noOfLines={3}>{item.note}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default TableEvent;
