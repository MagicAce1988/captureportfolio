import GlobalStyle from './GlobalStyle.styled';
import { Nav } from './components';
import { AboutUs, ContactUs, OurWork } from './pages';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
