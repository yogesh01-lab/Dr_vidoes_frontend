import React from 'react'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'

function TableHeader(props) {
  const { valueToOrderBy, orderDirection, handleRequestSort } = props

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property)
  }

  return (

    <TableHead>
      <TableRow>

        <TableCell key="Sr. NO">
          <TableSortLabel hideSortIcon>
            Sr. NO
          </TableSortLabel>
        </TableCell>

        <TableCell key="name">
          <TableSortLabel active={valueToOrderBy === "name"} direction={valueToOrderBy === "name" ? orderDirection : 'asc'}
            onClick={createSortHandler('name')}
          >
            Name
          </TableSortLabel>
        </TableCell>

        <TableCell key="dataCount">
          <TableSortLabel active={valueToOrderBy === "dataCount"} direction={valueToOrderBy === "dataCount" ? orderDirection : 'asc'}
            onClick={createSortHandler('dataCount')}
          >
            Count
          </TableSortLabel>
        </TableCell>

        <TableCell key="id">
          <TableSortLabel active={valueToOrderBy === "id"} direction={valueToOrderBy === "Unique ID" ? orderDirection : 'asc'}
            onClick={createSortHandler('id')}
          >
            Unique ID
          </TableSortLabel>
        </TableCell>

      </TableRow>
    </TableHead>

  )
}

export default TableHeader;