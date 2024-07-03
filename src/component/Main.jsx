import LogoImage from '../Images/my_photo.jpg';
import EmLiButton from './EmLiButton';
import { Container } from '@mui/material';

import Box from '@mui/material/Box';
import SocialMedia from './SocialMedia';

import '../style.css';

import About from './About';
export default function Main(){
    return (
        
        <Container maxWidth="sm">
             <Box height={890}
            width={340}
            my={4}
            
            alignItems="center"
            gap={4}
            borderRadius={2}
           
            sx={{ bgcolor: "#383434", color:"white"}}
           >
            
        <img className = "rounded" src={LogoImage} alt='' width={340} height={291} borderRadius = {2}/>
       
        <Container maxWidth="sm">
        <Box 
        p={0}
        >
            <Container>
            <h3 style={{textAlign:"center"}}>Seifedin Hayredin</h3>
            <h5 style={{textAlign:"center", color: "#F4D891"}}>Frontend Developer</h5>
            <h6 style={{textAlign:"center"}}>Seifedinhayredin.com</h6>
            </Container>
        
        <EmLiButton />
        <About />
       
        </Box>
        
        </Container>
        
        
        < SocialMedia />
       
        
        </Box>
        
        </Container>
    );
}