'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

export interface UserProps {
    code?: String;
    dni?: String,
    name?: String;
    lastName?: String;
    phone?: String,
    cellphone?: String;
    address?: String;
    email?: String;
    institutionalEmail?: String;
    inclutionDate?: Date;
    state?: String;
    career?: String;
}

export function UserInfoTable({
    code = '', 
    dni = '', 
    name = '', 
    lastName = '', 
    phone = '', 
    cellphone = '', 
    address = '', 
    email = '',
    institutionalEmail = '', 
    career = '', 
    inclutionDate = new Date(), 
    state = ''
}: UserProps){

    return (
        <Card>
            <Box overflow='auto'>
                <Table>
                    <TableBody>
                        {/* Codigo */}
                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle1'>Código</Typography>
                            </TableCell>
                            <TableCell>
                                {code}
                            </TableCell>
                        </TableRow>
                        {/* documento */}
                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle1'>Número de documento</Typography>
                            </TableCell>
                            <TableCell>
                                {dni}
                            </TableCell>
                        </TableRow>
                        {/* nombre */}
                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle1'>Nombre</Typography>
                            </TableCell>
                            <TableCell>
                                {name}
                            </TableCell>
                        </TableRow>
                        {/* apellido */}
                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle1'>Apellido</Typography>
                            </TableCell>
                            <TableCell>
                                {lastName}
                            </TableCell>
                        </TableRow>
                        {/* telefono */}
                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle1'>Teléfono</Typography>
                            </TableCell>
                            <TableCell>
                                {phone}
                            </TableCell>
                        </TableRow>
                        {/* telefono celular */}
                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle1'>Celular</Typography>
                            </TableCell>
                            <TableCell>
                                {cellphone}
                            </TableCell>
                        </TableRow>
                        {/* email */}
                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle1'>Email</Typography>
                            </TableCell>
                            <TableCell>
                                {email}
                            </TableCell>
                        </TableRow>
                        {/* email intitucional */}
                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle1'>Email Institucional</Typography>
                            </TableCell>
                            <TableCell>
                                {institutionalEmail}
                            </TableCell>
                        </TableRow>
                        {/* fecha inclusion */}
                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle1'>Fecha de Inclusión</Typography>
                            </TableCell>
                            <TableCell>
                                {`${inclutionDate.getDate()}/${inclutionDate.getMonth()}/${inclutionDate.getFullYear()}`}
                            </TableCell>
                        </TableRow>
                        {/* direccion */}
                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle1'>Dirección</Typography>
                            </TableCell>
                            <TableCell>
                                {address}
                            </TableCell>
                        </TableRow>
                        {/* carrera */}
                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle1'>Carrera</Typography>
                            </TableCell>
                            <TableCell>
                                {career}
                            </TableCell>
                        </TableRow>
                        {/* Estado */}
                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle1'>Estado</Typography>
                            </TableCell>
                            <TableCell>
                                {state}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>
        </Card>
    )
}

