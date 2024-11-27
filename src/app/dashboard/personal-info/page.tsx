import * as React from 'react';
import type { Metadata } from 'next';
import { UserInfoTable } from '@/components/dashboard/personal-info/personal-info-table';

import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import { config } from '@/config';

export const metadata = { title: `Información Personal | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
    return (
        <Stack sx={{display: 'flex', flexDirection: 'column', gap: 3, paddingTop: '20px'}}>
            <Box sx={{display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center'}}>
                <Typography variant='h4'>INFORMACIÓN PERSONAL</Typography>
                <Typography variant='caption'>Consulte su información como estudiante</Typography>   
            </Box>
            <UserInfoTable/>
        </Stack>
    )
}