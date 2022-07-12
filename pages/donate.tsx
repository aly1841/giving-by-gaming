import { NextPage } from 'next';
import Products from '../components/Products';
import { Container, Typography, FormControl, InputLabel, Input, InputAdornment, Button, OutlinedInput, CircularProgress, Box } from '@mui/material';
import { CurrencyExchange } from '@mui/icons-material';
import Cart from '../components/Cart';
import * as React from 'react';
import { fetchPostJSON } from '../src/api-helpers';
import getStripe from '../src/get-stripejs';

const PaymentPage: NextPage = () => {
    const [amount, setAmount] = React.useState(5);
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (isNaN(Number(value))) {
            setError('Please enter a number');
        } else {
            setError('');
            setAmount(Number(value));
        }
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Create a Checkout Session.
        const response = await fetchPostJSON('/api/checkout_sessions/', {
            amount: amount,
        });

        if (response.statusCode === 500) {
            console.error(response.message);
            return;
        }

        // Redirect to Checkout.
        const stripe = await getStripe();
        const { error } = await stripe!.redirectToCheckout({
            // Make the id field from the Checkout Session creation API response
            // available to this file, so you can provide it as parameter here
            // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
            sessionId: response.id,
        });
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `error.message`.
        console.warn(error.message);
        setLoading(false);
    };

    return (
        <Container component="form" onSubmit={handleSubmit}>
            <FormControl fullWidth sx={{ m: 1 }}>
                {/* @ts-ignore */}
                <InputLabel error={error !== ""} htmlFor="outlined-adornment-amount">{error || "Amount"}</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={amount}
                    disabled={loading}
                    error={error !== ""}
                    onChange={handleChange}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Amount"
                />
            </FormControl>
            <Box sx={{ m: 1, position: "relative" }}>
                <Button variant="contained" color="secondary" type="submit" sx={{ m: 2 }} disabled={loading}>
                    Donate
                </Button>
                {loading && (
                    <CircularProgress
                        size={24}
                        color="secondary"
                        sx={{
                            position: 'absolute',
                            marginTop: '24px',
                            marginLeft: '-68px',
                        }}
                    />
                )}
            </Box>
        </Container>
    );
};

export default PaymentPage;
