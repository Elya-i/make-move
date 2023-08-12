import { useState } from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Bolt from '@mui/icons-material/Bolt'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import PersonIcon from '@mui/icons-material/Person';

const actionStyles = {
    color: 'nav.fontColor',
    '&.Mui-selected': {
        color: 'nav.selectedColor'
    },
    '&& .Mui-selected': {
        color: 'move.main'
    }
}

export const Footer = (props) => {
    const [value, setValue] = useState(1);

    return (
        <Paper sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: '80px',
            bgcolor: 'nav.bgcolor'
        }} elevation={3}>
            <BottomNavigation
                showLabels
                sx={{ height: '80px', bgcolor: 'nav.bgcolor' }}
                value={value}
                onChange={(_, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction sx={actionStyles} label="ГЛАВНЫЙ" icon={<Bolt />} />
                <BottomNavigationAction sx={actionStyles} label="ТРЕНИРОВКА" icon={<DirectionsRunIcon />} />
                <BottomNavigationAction sx={actionStyles} label="ПРОФИЛЬ" icon={<PersonIcon />} />
            </BottomNavigation>
        </Paper>
    )
}
