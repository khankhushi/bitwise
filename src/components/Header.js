import React from "react";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "#9B25CC",
    fontFamily: "Oswald",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  const { currency, setCurrency } = CryptoState();


  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push(`/`)}
              variant="h4"
              className={classes.title}
            >
              BITWISE
            </Typography>
            <Select
               variant="outlined"
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={currency}
               style={{ width: 100, height: 40, marginLeft: 15 }}
               onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>INR</MenuItem>
              <MenuItem value={"INR"}>USD</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
