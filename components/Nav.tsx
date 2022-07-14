import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Link from "./Link";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const pages: string[] = ['About Us', 'Entry Fees', 'Donate', 'Staff', 'Tournament Format'];

const ResponsiveAppBar = () => {
    const router = useRouter();
    const [state, setState] = React.useState(false);

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState(open);
            };

    return (
        <AppBar position="static" sx={{ opacity: 0.8 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <img src="https://cdn.discordapp.com/attachments/896446873777365012/994260156600811530/Chibi.PNG" alt="logo" width="50px" height="50px" />
                    </Box>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleDrawer(true)}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <React.Fragment>
                            <SwipeableDrawer
                                anchor={"left"}
                                open={state}
                                onClose={toggleDrawer(false)}
                                onOpen={toggleDrawer(true)}
                            >
                                <Box
                                    sx={{ width: 250 }}
                                    role="presentation"
                                    onClick={toggleDrawer(false)}
                                    onKeyDown={toggleDrawer(false)}
                                >
                                    <List>
                                        <ListItem key={"Home"} onClick={() => router.push("/")} disablePadding>
                                            <ListItemButton>
                                                <ListItemText primary={"Home"} />
                                            </ListItemButton>
                                        </ListItem>



                                        {pages.map((text) => (
                                            <ListItem key={text} onClick={() => router.push("/" + text.toLowerCase().replace(/ /g, "-"))} disablePadding>
                                                <ListItemButton>
                                                    <ListItemText primary={text} />
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            </SwipeableDrawer>
                        </React.Fragment>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button key={"Home"} onClick={() => router.push("/")} sx={{ my: 2, color: 'white', display: 'block' }}>
                            Home
                        </Button>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                component={Link}
                                href={"/" + page.toLowerCase().replace(/ /g, "-")}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default ResponsiveAppBar;;