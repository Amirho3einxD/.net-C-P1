import { Group } from "@mui/icons-material";
import { Box, Button , Toolbar, Typography, Container, MenuItem } from "@mui/material";

type Props= {
    openForm:()=>void;

}

export default function NavBar({openForm}:Props) {
    return (
        <Box sx={{
        background: "linear-gradient(135deg, #6366F1 0%, #60A5FA 69%, #38BDF8 89%)"
        }}>
            <Container maxWidth='xl'>
                <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
                    <Box>
                        <MenuItem sx={{display:'flex',gap:2}}>
                        <Group fontSize="large" />
                        <Typography variant="h4" fontWeight='bold'>
                        .Net-Course
                        </Typography>
                        </MenuItem>
                    </Box>
                    <Box sx={{display:"flex"}}>
                        <MenuItem sx={{fontSize:'1.2rem',textTransform:'uppercase',fontWeight:'bold'}}>
                        ActivityList
                        </MenuItem>
                         <MenuItem sx={{fontSize:'1.2rem',textTransform:'uppercase',fontWeight:'bold'}}>
                        About
                        </MenuItem>
                        <MenuItem sx={{fontSize:'1.2rem',textTransform:'uppercase',fontWeight:'bold'}}>
                        Contact
                        </MenuItem>
                    </Box>
                    <Button size="large" variant="contained" color="warning" onClick={openForm}>CreateActivity</Button>
                </Toolbar>
            </Container>
        </Box>
    )
}