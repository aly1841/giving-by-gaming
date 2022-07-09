import { Box, Button, Container } from '@mui/material';
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
          Giving By Gaming
        </h1>

        <p className={styles.description}>
          Giving by Gaming is a nonprofit organization dedicated to raising money for various charities through video game tournaments and taking strides towards breaking the stigma around gamers and the gaming community.
        </p>

        <Box sx={{ display: "flex", gap: 3 }}>
          <Button
            className={styles.button}
            variant="outlined"
            color="primary"
            href="https://forms.gle/BzCe7whiP4Wr3EXY9"
          >
            Invidiual Registration
          </Button>
          <Button
            className={styles.button}
            variant="outlined"
            color="primary"
            href="https://forms.gle/3Sn3uTBor5cwzT3h8"
          >
            Team Registration
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
