import { useShoppingCart } from "use-shopping-cart/react";
import { Box, Card, CardContent, Typography, CardActions, Fab, Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { fetchPostJSON } from "../src/api-helpers";
import { useState } from "react";
import product from "../data/products";

const Products = () => {
    const { addItem, decrementItem, cartDetails,
        redirectToCheckout, } = useShoppingCart();

    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        setLoading(true);

        const response = await fetchPostJSON(
            '/api/checkout_sessions',
            cartDetails
        );

        if (response.statusCode > 399) {
            console.error(response.message);
            setLoading(false);
            return;
        }

        redirectToCheckout({ sessionId: response.id });
    };

    return (
        <Box sx={{ display: 'flex', gap: 4, flexWrap: "wrap", WebkitFlexWrap: "wrap", justifyContent: "center" }}>
            {product.map((product) => (
                <Card key={product.name} sx={{ minWidth: 250, maxWidth: { xs: "25%" }, bgColor: 'primary', p: 1 }} raised={true}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {product.description}
                        </Typography>
                        <Box sx={{ display: "flex" }}>
                            <Typography variant="h4" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="h2" ml={3} color="secondary" sx={{ fontWeight: "bold" }}>
                                ${product.price / 100}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions sx={{ display: "block" }}>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, my: 2 }}>
                            <Fab size="small" color="primary" aria-label="remove" onClick={() => decrementItem(product.id)}>
                                <RemoveIcon />
                            </Fab>
                            <Typography variant="h4" component="div">
                                {cartDetails[product.id]?.quantity || 0}
                            </Typography>
                            <Fab size="small" color="primary" aria-label="add" onClick={() => addItem(product)}>
                                <AddIcon />
                            </Fab>
                        </Box>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={handleCheckout}
                            disabled={loading}
                            sx={{ width: "100%" }}
                        >
                            Purchase
                        </Button>
                    </CardActions>
                </Card>
            ))
            }
        </Box >
    );
};

export default Products;