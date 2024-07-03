import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function EmLiButton(){
    return (
        <Stack spacing={3} direction="row">
        <Button variant='outlined' style={{backgroundColor:"white"}}><EmailIcon/> Email</Button>
        <Button variant='contained'><LinkedInIcon /> LinkedIn</Button>
        </Stack>

    );
};