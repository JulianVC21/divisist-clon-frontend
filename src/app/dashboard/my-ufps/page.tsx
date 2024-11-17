import * as React from 'react';
import type { Metadata } from 'next';
import { CareerTable } from '@/components/dashboard/my-ufps/career-table';
import { FacultyTable } from '@/components/dashboard/my-ufps/faculty-table';
import { DependenciesTable, DependencyProps } from '@/components/dashboard/my-ufps/dependencies-table';
import Stack from '@mui/material/Stack';
import { Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';

import { config } from '@/config';

export const metadata = { title: `Mi UFPS | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
    const dependencies: DependencyProps[] = [
        {director: 'Ortega Sierra Sandra', email: 'rectoria@ufps.edu.co', name: 'Rectoria'},
        {director: 'Urbina Cardenas Jesus Ernesto', email: 'viceacademia@ufps.edu.co', name: 'Vicerectoria Academica'},
        {director: 'Sanchez Molina Jorge', email: 'viceadministrativa@ufps.edu.co', name: 'Vicerectoria Administrativa'},
        {director: 'Trujillo Toscano Luis Eduardo', email: 'vicebienestar@ufps.edu.co', name: 'Vicerectoria de Bienestar Universitario'},
        {director: 'Florez Gongora Carlos Humberto', email: 'viceinvestigaciones@ufps.edu.co', name: 'Vicerectoria de Investigacion y Extension'},
    ];
    return (
        <Stack sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
            <Box sx={{display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center'}}>
             <Typography variant='h4'>INFORMACIÓN</Typography>
             <Typography variant='caption'>Universidad Francisco de Paula Santander</Typography>   
            </Box>
            <Grid container gap={2} justifyContent='center' alignItems='center'>
                <Grid xs={12} lg={6}>
                    <CareerTable/>
                </Grid>
                <Grid xs={12} lg={6}>
                    <FacultyTable/> 
                </Grid>
            </Grid>
            
            <DependenciesTable dependencies={dependencies} />
        </Stack>
    )
}