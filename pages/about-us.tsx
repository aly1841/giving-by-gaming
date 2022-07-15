import { Box, Container, Stack, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Image from "next/image";

const About: NextPage = () => {
    return <>
        <Container sx={{ p: 3 }}>
            <Stack direction="column" p={{ xs: 6, sm: 3, md: 3 }} alignItems={{ xs: "center" }}>
                <Typography sx={{ fontWeight: 600, flexGrow: 1 }} variant="h4" mb={3} color="textSecondary">About Us</Typography>
                <Typography variant="h2">
                    Our Roots
                </Typography>
                <Typography variant="body1" py={3}>
                    Giving by Gaming (GG), originally known as North Texas Championship Series (NTXCS), is a nonprofit organization founded in North Texas by Amy Yan and Ethan Havemann in October of 2021. Since then, they have successfully hosted 2 tournaments, and are currently hosting their 3rd. GG has previously donated to Dallas Children&apos;s Hospital and the Muscular Dystrophy Association. As they continue to grow, they have also accepted sponsorships from AK PC Gaming Cafe (previous) and Rank 1 Gaming Cafe (current).
                </Typography>
                <Box maxWidth={500} flex={1}>
                    <Image src="/OldLogo.png" alt="logo" width={500} height={500} />
                    <p>Our original logo!</p>
                </Box>
                <Typography variant="h2">
                    Our Mission
                </Typography>
                <Typography variant="body1" py={3}>
                    Giving by Gaming hopes to benefit many more causes in the future, and provide support to people around the world. Giving by Gaming also wishes to lead the way in breaking the stigma and stereotypes surrounding video games, and provide a fun and socially responsible space for players everywhere.
                </Typography>
            </Stack>
        </Container>
    </>;
};

export default About;
