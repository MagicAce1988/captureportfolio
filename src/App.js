import GlobalStyle from './GlobalStyle.styled';
import { Nav } from './components';
import { AboutUs, ContactUs, OurWork, MovieDetail } from './pages';
import { Route, Switch, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import ScrollTop from './components/ScrollTop';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <ScrollTop>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <AboutUs />
            </Route>
            <Route path="/work" exact>
              <OurWork />
            </Route>
            <Route path="/work/:id">
              <MovieDetail />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
          </Switch>
        </ScrollTop>
      </AnimatePresence>
    </div>
  );
}

export default App;
