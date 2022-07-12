import { NextPage } from 'next';
import { Container, Typography, Stack, Box, Divider } from '@mui/material';

const ParticipationPage: NextPage = () => {
    return (
        <Stack>
            <Container>
                <Typography variant="h2" m={3} >Tournament Format</Typography>
                <Divider />
                <Typography variant="body1" m={3}>
                    This tournament will feature a 2-phase modified pools system. Group round-robin stages will take place on Friday (15th) and Saturday (16th) and will be a best-of-1. The top 2 teams in the pools will continue playing on Saturday (16th) and Sunday (17th). These matches (semi-finals) will be a best-of-3 with a 1-round advantage for the teams who placed first in their pools. The winners of this stage will advance to the finals, which will be a traditional Bo3. The semi-finals and finals will begin at 10:00 AM on Sunday.
                </Typography>
                <Typography variant="h4" m={3}>
                    General Guidelines
                </Typography>
                <Typography component="div" variant="body1" m={3}>
                    We would like to give as much freedom as possible for matchmaking. In accordance, there <strong>will be no set time for group stage matches</strong>, it will be entirely up to the teams and their team captains to ensure that the games are completed <strong>before July 16th, 1:00 PM Central Time.</strong> If scheduling conflicts arise, contact staff via Discord (amy#6140, ypraaaa#7193, or jexel#0001) or email (<a href="mailto:givingbygaming@gmail.com">givingbygaming@gmail.com</a>) immediately. Pools will be posted no later than 12 hours before tournament day on Friday (15th).
                    <Box m={2} />
                    Should 2 teams fail to agree upon a time, the team that is available during these listed times will receive a default preference:
                    Friday 6:00PM-10:00PM Central
                    Saturday 10:00AM-12:00PM Central
                    If neither team can make a time listed, a winner will be decided upon coin-toss.
                    If both teams can make it during the listed times, but cannot agree upon a specific time, then the team that can play <strong>the earliest</strong> will receive a default preference.
                    <Box m={1} />
                    If a team has a preference and shows up with all 5 members ready and the other team is not ready to play in 15 minutes, then the preferred team will receive an automatic win.
                    <Box m={1} />
                    If neither team shows up during the set preferred time, then a win will be determined by a coin toss.

                </Typography>
            </Container>
        </Stack>
    );
};

export default ParticipationPage;