import Nav from "./Nav";
import Footer from "./Footer";
import { Box, CssBaseline } from "@mui/material";
import Head from "next/head";

const Layout = ({ children }: JSX.ElementChildrenAttribute) => {
    return (
        <>
            <Head>
                <title>Giving by Gaming</title>
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
                {/* @ts-ignore */}
                {children}
            </Box>
            <Footer />
        </>
    );
};

export default Layout;