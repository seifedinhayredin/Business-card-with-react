import Main from "./component/Main";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
export default function App(){
    return (
        <Container maxWidth = "lg">
            <Box 
            p={2}
            sx = {{bgcolor: "#474545"}}>
            <Main />
            </Box>
        
        
        </Container>
    );
}