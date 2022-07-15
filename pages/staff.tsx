import { Container, Grid } from "@mui/material";
import { NextPage } from "next";
import Profile from "../components/Profile";
import staff from "../data/staff";

const Staff: NextPage = () => {
    return (
        // @ts-ignore
        <Grid container gap={6} align="center" justifyContent="center">
            {staff.map((profile) => (
                <Grid item style={{ textAlign: "center" }}>
                    <Profile key={profile.name} {...profile} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Staff;
