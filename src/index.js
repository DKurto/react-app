import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import NewDay from './components/NewDay';
import Week from './components/Week';


ReactDOM.render(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Week} />
        <Route path='new_day' component={NewDay} />
      </Route>
    </Router>,
    document.getElementById('root')
);
