import React from 'react';
import AllCandies from '../AllCandies';
import SingleCandy from '../SingleCandy';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom'; // For react router

const Root = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          Goodie Bag
          <Link to="/candies">ALL CANDIES</Link>
          <Link to="/">HOME</Link>
        </nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
        </main>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/candies" component={AllCandies} />
          <Route exact path="/candies/:id" component={SingleCandy} />
        </Switch>
      </div>
    </Router>
  );
};

export default Root;

// In css file, add:

// .link {
//   color: white;
//   font-size: 20px;
// psdding: 20px
// }

// For the home component, can just leave out component & not have to create a HomeComponent in components.js:
{
  /* <Route exact path="/" /> */
}
{
  /* <Route exact path="/" component={HomeComponent} /> */
}
