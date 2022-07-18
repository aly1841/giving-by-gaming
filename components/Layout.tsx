import Nav from "./Nav";
import Footer from "./Footer";
import { Box, CssBaseline } from "@mui/material";
import Head from "next/head";

const Layout = ({ children }: JSX.ElementChildrenAttribute) => {
    return (
        <>
            <Head>
                <title>Giving by Gaming</title>
                <meta name="og:title" content="Giving by Gaming" />
                <meta name="og:description" content="Support charity by playing your favorite games in our tournament!" />
                <meta name="og:image" content="/Chibi.png" />
                <meta name="theme-color" content="#05a2e1" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="icon" href="/Chibi.png" />
            </Head>
            <CssBaseline />
            <Nav />
            <Box sx={{ p: 2, minHeight: "100vh" }}>
                {/* @ts-ignore */}
                {children}
            </Box>
            <Footer />
        </>
    );
};

export default Layout;