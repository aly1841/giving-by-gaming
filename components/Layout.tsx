import Nav from "./Nav";
import Footer from "./Footer";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import { red } from '@mui/material/colors';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#f9ebcc",
        },
        background: {
            default: "#1b1b1b"
        }
    },
});

const Layout = ({ children }: JSX.ElementChildrenAttribute) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <>
                <Head>
                    <title>Giving bY Gaming</title>
                    <meta name="description" content="Pay your developers more" />
                    <meta name="og:title" content="Giving by Gaming" />
                    <meta name="og:description" content="Pay your developers more" />
                    <meta name="og:image" content="/Chibi.png" />
                    <meta name="theme-color" content="#05a2e1" />
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />

                </Head>
                <CssBaseline />
                <Nav />
                <Box p={2}>
                    {children}
                </Box>
                <Footer />
            </>
        </ThemeProvider>
    );
};

export default Layout;