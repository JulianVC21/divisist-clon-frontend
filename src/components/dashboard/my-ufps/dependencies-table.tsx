'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

export interface DependencyProps {
    name?: String;
    director?: String;
    email?: String;
}

export interface DependencyTableProps {
    dependencies: DependencyProps[]
}

export function DependenciesTable ( { dependencies }: DependencyTableProps){

    return (
        <Card>
            <Box overflow='auto'>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell><Typography variant='h5'>Directivas UFPS</Typography></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><Typography variant='h6'>Dependencia</Typography></TableCell>
                            <TableCell><Typography variant='h6'>Director</Typography></TableCell>
                            <TableCell><Typography variant='h6'>Email</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            dependencies.map( (dependency, index) => (
                                <TableRow key={`dependency-${index}`}>
                                    <TableCell>{dependency.name}</TableCell>
                                    <TableCell>{dependency.director}</TableCell>
                                    <TableCell>{dependency.email}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </Box>
        </Card>
    )
}