import { Group } from "@mui/icons-material";
import { Box , Toolbar, Typography, Container, MenuItem } from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/component/MenuItemLink";


export default function NavBar() {
    return (
        <Box sx={{
        background: "linear-gradient(135deg, #6366F1 0%, #60A5FA 69%, #38BDF8 89%)"
        }}>
            <Container maxWidth='xl'>
                <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
                    <Box>
                        <MenuItem component={NavLink} to='/' sx={{display:'flex',gap:2}}>
                        <Group fontSize="large" />
                        <Typography variant="h4" fontWeight='bold'>.Net-Course</Typography>
                        </MenuItem>
                    </Box>
                    <Box sx={{display:"flex"}}>
                        <MenuItemLink  to='/activities'>
                        ActivityList
                        </MenuItemLink>
                         <MenuItemLink  to='/createActivity'>
                        Create Activity
                        </MenuItemLink>
                    </Box>
                    <MenuItem>UserMenu</MenuItem>
                </Toolbar>
            </Container>
        </Box>
    )
}