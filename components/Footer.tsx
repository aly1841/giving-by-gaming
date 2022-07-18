import { Container, Typography, Box } from "@mui/material";

const Footer = () => {
    return (
        <footer>
            <Box sx={{ bgcolor: "#151515", p: 2 }}>
                <Typography variant="body1" color="text.secondary" bgcolor={"primary"}>
                    © {new Date().getFullYear()} Squidtoon99
                </Typography>
            </Box>
        </footer>
    );
};

export default Footer;