'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

export interface FacultyInfoProps {
    name?: String;
    email?: String;
    director?: String;
}

export function FacultyTable({
    name = '',
    email = '',
    director = '',
}: FacultyInfoProps) {

    return (
        <Card>
            <Box overflow='auto'>
                <Table>
                    <TableHead>
                        <TableCell>
                            <Typography variant='h5'>FACULTAD</Typography>
                        </TableCell>
                        <TableCell></TableCell>
                    </TableHead>
                    <TableBody>
                        {/* nombre */}
                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle1'>Nombre de la Facultad</Typography>
                            </TableCell>
                            <TableCell>{name}</TableCell>
                        </TableRow>
                        {/* email */}
                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle1'>Email del Programa</Typography>
                            </TableCell>
                            <TableCell><a href={`mailto:${email}`}>{email}</a></TableCell>
                        </TableRow>
                        {/* director */}
                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle1'>Nombre del Decano</Typography>
                            </TableCell>
                            <TableCell>{director}</TableCell>
                        </TableRow>    
                    </TableBody>
                </Table>
            </Box>
        </Card>
    )
}