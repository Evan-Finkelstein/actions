import React from 'react';
// import CommentDisplay from '../comments/CommentDisplay'
import PostDisplay from '../posts/PostDisplay'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={PostDisplay} />
          {/* <Route path="/posts/:id" component={CommentDisplay} /> */}
        </Switch>
      </Router>
    </>
  )
    ;
}
