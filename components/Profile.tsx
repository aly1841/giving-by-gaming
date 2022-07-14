import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";

const Profile = ({ name, title, image }: ({ name: string; title: string; image: string; })) => {
    return (
        <Card sx={{ maxWidth: 345, minWidth: 250 }}>
            {image && <CardMedia
                component="img"
                height="345"
                alt=""
                image={image}
            />}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Profile;