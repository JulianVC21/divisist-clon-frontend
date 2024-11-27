'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

export interface CareerInfoProps {
    code?: String;
    name?: String;
    semesters?: String;
    email?: String;
    director?: String;
}

export function CareerTable({
    code = '',
    name = '',
    semesters = '',
    email = '',
    director = '',
}: CareerInfoProps){

    return (
        <Card>
            <Box overflow='auto'>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant='h5'>PROGRAMA</Typography>
                            </TableCell>
                            <TableCell></TableCell> 
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* codigo */}
                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle1'>Código Programa</Typography>
                            </TableCell>
                            <TableCell>{code}</TableCell>
                        </TableRow>
                        {/* nombre */}
                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle1'>Nombre Programa</Typography>
                            </TableCell>
                            <TableCell>{name}</TableCell>
                        </TableRow>
                        {/* duracion */}
                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle1'>Duración de la Carrera</Typography>
                            </TableCell>
                            <TableCell>{semesters}</TableCell>
                        </TableRow>
                        {/* email */}
                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle1'>Correo del Programa</Typography>
                            </TableCell>
                            <TableCell>{email}</TableCell>
                        </TableRow>
                        {/* codigo */}
                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle1'>Nombre del Director</Typography>
                            </TableCell>
                            <TableCell>{director}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>
        </Card>
    )
}