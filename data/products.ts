const product = [
    {
        name: 'Individual Ticket',
        description: 'Individual player',
        id: process.env.NEXT_PUBLIC_STRIPE_PRODUCT_ID_INDIVIDUAL!,
        price: 700,
        image:
            'https://images.unsplash.com/photo-1574226516831-e1dff420e562?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=225&q=80',
        attribution: 'Photo by Priscilla Du Preez on Unsplash',
        currency: 'USD',
    },
    {
        name: 'Team Ticket',
        description: "For teams of 2-4 players",
        id: process.env.NEXT_PUBLIC_STRIPE_PRODUCT_ID_TEAM!,
        price: 500,
        image:
            'https://images.unsplash.com/photo-1482012792084-a0c3725f289f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=225&q=80',
        attribution: 'Photo by Jonathan Pielmayer on Unsplash',
        currency: 'USD',
    },
];
export default product;