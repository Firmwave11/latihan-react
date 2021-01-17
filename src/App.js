
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Dashboard from './views/dashboard';
import { ThemeProvider } from '@material-ui/core';
import theme from 'src/theme';

const App = props => {
  return(
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" name="Home" component={Dashboard}/>
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default App;