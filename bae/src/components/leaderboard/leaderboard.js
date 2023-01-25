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
import {clicked} from "../Search/Search.js"
export default function leaderboard(){
    let danScore = 1
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
        <Td isNumeric>3</Td>
      </Tr>
      <Tr>
        <Td>Lucy</Td>
        <Td>Digital Intelligence</Td>
        <Td isNumeric>7</Td>
      </Tr>
      <Tr>
        <Td>Matt</Td>
        <Td>Data Science</Td>
        <Td isNumeric>14</Td>
      </Tr>
      <Tr>
        <Td>Ian</Td>
        <Td>Analysis</Td>
        <Td isNumeric>18</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      
    </Tfoot>
  </Table>
</TableContainer>

            </div>
}