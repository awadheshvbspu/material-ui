import React from 'react'
import { Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Paper } from '@mui/material';


export default function MuiTable() {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow >
                        <TableCell align="center">Id</TableCell>
                        <TableCell align="center">First Name</TableCell>
                        <TableCell align="center">Last Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map(row => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align='center'>{row.id}</TableCell>
                            <TableCell align='center'>{row.first_name}</TableCell>
                            <TableCell align='center'>{row.last_name}</TableCell>
                            <TableCell align='center'>{row.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const tableData = [
    { "id": 1, "first_name": "Myron", "last_name": "Geke", "email": "mgeke0@ustream.tv", "gender": "Male", "ip_address": "235.49.166.137" },
    { "id": 2, "first_name": "Debra", "last_name": "Menham", "email": "dmenham1@home.pl", "gender": "Female", "ip_address": "158.199.162.91" },
    { "id": 3, "first_name": "Tanner", "last_name": "Vannuchi", "email": "tvannuchi2@blinklist.com", "gender": "Male", "ip_address": "245.144.231.223" },
    { "id": 4, "first_name": "Barthel", "last_name": "Norcross", "email": "bnorcross3@people.com.cn", "gender": "Male", "ip_address": "224.58.217.33" },
    { "id": 5, "first_name": "Hillier", "last_name": "Leak", "email": "hleak4@usatoday.com", "gender": "Male", "ip_address": "171.214.54.100" },
    { "id": 6, "first_name": "Dean", "last_name": "Riden", "email": "driden5@chronoengine.com", "gender": "Male", "ip_address": "158.86.208.63" },
    { "id": 7, "first_name": "Horst", "last_name": "Wickens", "email": "hwickens6@symantec.com", "gender": "Male", "ip_address": "39.247.65.123" },
    { "id": 8, "first_name": "Shurwood", "last_name": "Collcutt", "email": "scollcutt7@cafepress.com", "gender": "Male", "ip_address": "144.60.99.163" },
    { "id": 9, "first_name": "Mercie", "last_name": "Breacher", "email": "mbreacher8@columbia.edu", "gender": "Female", "ip_address": "102.232.47.128" },
    { "id": 10, "first_name": "Natka", "last_name": "Slatten", "email": "nslatten9@ed.gov", "gender": "Female", "ip_address": "86.194.15.8" }]

