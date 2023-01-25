import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

export default function Leaderboard(){
    let danScore = 14
        return  <div className="leaderboard-container">
            <TableContainer>
  <Table variant='simple'>
    <TableCaption>Weekly leaderboard</TableCaption>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Department</Th>
        <Th isNumeric> CarbonDiet Score</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Dan</Td>
        <Td>Digital Intelligence</Td>
        <Td isNumeric>{danScore}</Td>
      </Tr>
      <Tr>
        <Td>Jane</Td>
        <Td>Cyber-Security</Td>
        <Td isNumeric>10</Td>
      </Tr>
      <Tr>
        <Td>Lucy</Td>
        <Td>Digital Intelligence</Td>
        <Td isNumeric>9</Td>
      </Tr>
      <Tr>
        <Td>Matt</Td>
        <Td>Data Science</Td>
        <Td isNumeric>5</Td>
      </Tr>
      <Tr>
        <Td>Ian</Td>
        <Td>Analysis</Td>
        <Td isNumeric>4</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>

            </div>
}