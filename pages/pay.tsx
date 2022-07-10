import { NextPage } from 'next';
import Products from '../components/Products';
import { Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import Cart from '../components/Cart';
type Amn = "i" | "t";

const PaymentPage: NextPage = () => {
    return (
        <Container>
            <Typography variant="h2" m={3}>Pay for Tickets</Typography>
            <Cart>
                <Products />
            </Cart>
        </Container >
    );
};

export default PaymentPage;
