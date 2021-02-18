import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';

import UsersList from './components/UsersList/UsersList';
import PostsList from './components/PostsList/PostsList';
import PostDetail from './components/PostDetails/PostDetails';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <UsersList />
          </Route>
          <Route exact path="/posts">
            <PostsList />
          </Route>
          <Route exact path="/posts/details">
            <PostDetail />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
