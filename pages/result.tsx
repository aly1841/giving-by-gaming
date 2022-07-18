import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { fetchGetJSON } from '../src/api-helpers';
import useSWR from 'swr';
import { Container, Typography } from '@mui/material';

const ResultPage: NextPage = () => {
    const router = useRouter();

    const { data, error } = useSWR(
        router.query.session_id
            ? `/api/checkout_sessions/${router.query.session_id}`
            : null,
        fetchGetJSON
    );

    if (error) return <div>failed to load</div>;

    if (data?.payment_intent?.status === "succeeded") {
        setTimeout(() => {
            router.push('/');
        }
            , 5000);
    }
    return (
        <Container>
            <Typography component="h1" variant="h4" color="text.secondary">Checkout Payment Result</Typography>

            <Typography component="h2" variant="h2" color="primary" >Status: {data?.payment_intent?.status ?? 'loading...'}</Typography>

        </Container>
    );
};

export default ResultPage;