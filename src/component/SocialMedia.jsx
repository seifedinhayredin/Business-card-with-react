import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Container } from '@mui/material';

import Stack from '@mui/material/Stack';
import '../style.css'

export default function SocialMedia(){
    return (
        
            <div className="social_media">
                <Container>
                <Stack spacing={3} direction="row">
                <TwitterIcon />
               <FacebookIcon />
           <InstagramIcon /> 
           <LinkedInIcon />
           <WhatsAppIcon />
                </Stack>
                </Container>
            
            </div>
           
       
    );
}