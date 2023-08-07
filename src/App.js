import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import { makeStyles } from "@material-ui/core";
import Header from './components/Header.js';
import HomePage from './Pages/HomePage.js';
import CoinPage from "./Pages/CoinPage";




const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#050505",
    color: "white",
    minHeight: "100vh",
  },
}));


function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Header/>
      <Route path='/' component={HomePage} exact/>
      <Route path='/coin/:id' component={CoinPage} exact/>
    </div>
    </BrowserRouter>
  );
}

export default App;

