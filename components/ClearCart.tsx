import { useEffect } from 'react';
import { useShoppingCart } from 'use-shopping-cart/react';

export default function ClearCart() {
    const { clearCart } = useShoppingCart();

    useEffect(() => clearCart(), [clearCart]);

    return <></>;
}