import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import logo from './logo.svg';
import { Navbar } from './app/Navbar';
import { Counter } from './features/counter/Counter';
import { PostsList } from './features/posts/PostsList';
import { AddPostForm } from './features/posts/AddPostForm';
import { SinglePostPage } from './features/posts/SinglePostPage';
import { EditPostForm } from './features/posts/EditPostForm';
import { UsersList } from './features/users/UsersList';
import { UserPage } from './features/users/UserPage';
import { NotificationsList } from './features/notifications/NotificationsList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <Navbar />

          <Switch>
            <Route 
              exact 
              path="/" 
              render={() => (
                <React.Fragment>
                  <AddPostForm />
                  <PostsList />
                </React.Fragment>
              )} 
            />
            <Route path="/posts/:postId" component={SinglePostPage} />
            <Route path="/editPost/:postId" component={EditPostForm} />
            <Route exact path="/users" component={UsersList} />
            <Route path="/users/:userId" component={UserPage} />
            <Route path="/notifications" component={NotificationsList} />
            <Redirect to="/" />
          </Switch>

          <span>
            <span>Learn </span>
            <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className="App-link"
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
        </header>
      </div>
    </Router>
  );
}

export default App;
