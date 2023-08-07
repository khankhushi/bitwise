import React from 'react';
import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles(() => ({
    banner: {
      backgroundImage: "url(./banner3.jpg)",
    },
    bannerContent: {
      height: 400,
      display: "flex",
      flexDirection: "column",
      paddingTop: 25,
      justifyContent: "space-around",
    },
    tagline: {
      display: "flex",
      height: "40%",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
    },
    // carousel: {
    //   height: "50%",
    //   display: "flex",
    //   alignItems: "center",
    // },
  }));

const Banner = () => {
    const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
        <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "OSWALD",
              letterSpacing: 3,
            }}
          >
            BITWISE
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              color: "white",
              textTransform: "capitalize",
              fontFamily: "Inter",
            }}
          >
            All the information about your favourite crypto currency at one place!
          </Typography>
        </div>

            <Carousel/>
      </Container>
    </div>
  )
}

export default Banner;
