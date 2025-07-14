import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TablePagination from '@mui/material/TablePagination'
import { TableContainer } from '@mui/material'
import TableHeader from './tableHeader'
import axios from "axios";


function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1
    }
    if (b[orderBy] > a[orderBy]) {
        return 1
    }
    return 0
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy)
}

const sortedRowinformation = (rowArray, comparator) => {
    const stabilizedRowArray = rowArray.map((el, index) => [el, index])
    stabilizedRowArray.sort((a, b) => {
        const order = comparator(a[0], b[0])
        if (order !== 0) return order
        return a[1] - b[1]
    })
    return stabilizedRowArray.map((el) => el[0])
}

function TableContent() {
    const [orderDirection, setOrderDirection] = React.useState('asc')
    const [valueToOrderBy, setValueToOrderBy] = React.useState('name')
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(1)

    const [data, setData] = useState([]);
    
            
  
    useEffect(() => {
    const baseURL = process.env.REACT_APP_API_BASE_URL;
    console.log(baseURL);
    //   axios.get(`${baseURL}/api/data.json`)
      axios.get('https://dr-vidoes-backend.onrender.com/api/data.json')
      .then( Response => {console.log(Response.data)
      setData(Response.data)})
      .catch(err => console.log(err))
      
    }, []);

    const handleRequestSort = (event, property) => {
        const isAscending = (valueToOrderBy === property && orderDirection === 'asc')
        setValueToOrderBy(property)
        setOrderDirection(isAscending ? 'desc' : 'asc')
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
         setRowsPerPage(parseInt(event.target.value, 10))
         setPage(0)
    }

    return (
        <>
            <TableContainer>
                <Table>
                    <TableHeader
                        valueToOrderBy={valueToOrderBy}
                        orderDirection={orderDirection}
                        handleRequestSort={handleRequestSort}
                    />
                    {
                        sortedRowinformation(data, getComparator(orderDirection, valueToOrderBy))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((Doctor, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    {index + 1}
                                </TableCell>
                                <TableCell>
                                    {Doctor.name}
                                </TableCell>
                                <TableCell>
                                    {Doctor.dataCount}
                                </TableCell>
                                <TableCell>
                                    {Doctor.id}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[1,2, 3]}
                component="div"
                count = {data.length}
                rowsPerPage={rowsPerPage}
                page = {page}
                onPageChange = {handleChangePage}
                onRowsPerPageChange = {handleChangeRowsPerPage}
            />
        </>
    )
}

export default TableContent;