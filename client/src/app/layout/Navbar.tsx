import { Group } from "@mui/icons-material";
import { Box, Toolbar, Typography, Container, MenuItem, LinearProgress, AppBar } from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/component/MenuItemLink";
import { useStore } from "../../lib/hooks/useStore";
import { Observer } from "mobx-react-lite";


export default function NavBar() {
    const { uiStore } = useStore();
    return (

        <Box sx={{flexGrow: 1}}>
            <AppBar
                position="static"
                sx={{
                    background: "linear-gradient(135deg, #6366F1 0%, #60A5FA 69%, #38BDF8 89%)",
                    position: "relative"
                }}
            >
                <Container maxWidth='xl'>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <MenuItem component={NavLink} to='/' sx={{ display: 'flex', gap: 2 }}>
                                <Group fontSize="large" />
                                <Typography variant="h4" fontWeight='bold'>.Net-Course</Typography>
                            </MenuItem>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <MenuItemLink to='/activities'>
                                ActivityList
                            </MenuItemLink>
                            <MenuItemLink to='/createActivity'>
                                Create Activity
                            </MenuItemLink>
                            <MenuItemLink to='/counter'>
                                Counter
                            </MenuItemLink>
                            <MenuItemLink to='/errors'>
                                Test Errors
                            </MenuItemLink>
                        </Box>
                        <MenuItem>UserMenu</MenuItem>
                    </Toolbar>
                </Container>
                <Observer>
                    {() => uiStore.isLoading ? (
                        <LinearProgress
                            color="secondary"
                            sx={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: 4
                            }}
                        />
                    ) : null}
                </Observer>
            </AppBar>

        </Box>
    )
}