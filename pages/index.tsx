import { Box, Button, Container } from '@mui/material';
import Link from "../components/Link";
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Container className={styles.main}>
        <img
          className={styles.mainbg}
          src="/Chibi.png"
          alt=""
        />
        <h1 className={styles.title}>
          Giving by Gaming
        </h1>

        <p className={styles.description}>
          We are a nonprofit organization dedicated to raising money for various charities through video game tournaments and taking strides towards breaking the stigma around gamers and the gaming community.
        </p>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Button
            className={styles.button}
            variant="outlined"
            color="primary"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdp8TRo_2--msyzH7dPWw6bZKYBnXV25H2IF7Qfi7jAAdyoFw/viewform"
          >
            Individual Registration
          </Button>
          <Button
            className={styles.button}
            variant="outlined"
            color="primary"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfZgfDenmUz5KxuJJ8WI0BJo0wr_vPUKAqdiXNTUyOy_MW7sQ/viewform"
          >
            Team Registration
          </Button>

        </Box>
        <Button
          component={Link}
          variant="outlined"
          color="secondary"
          href="/donate"
          sx={{ m: 3, p: 2, width: "40%", minWidth: 275, fontWeight: "bold", fontSize: "1.5 rem" }}
        >
          Donate
        </Button>
      </Container>
    </div>
  );
};

export default Home;
