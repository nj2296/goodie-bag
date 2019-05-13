import React from 'react';
import { connect } from 'react-redux';
import { getAllCandiesThunk } from '../reducers';
import { Link } from 'react-router-dom';

class AllCandies extends React.Component {
  componentDidMount() {
    this.props.getCandies();
  }

  render() {
    let candies = this.props.candies;
    if (this.props.loading) return <div>LOADING!!!!</div>; // If we need loading state, do this!
    return (
      <div>
        {candies.map(candy => (
          <div key={candy.id}>
            <h1>{candy.name}</h1>
            <Link to={`/candies/${candy.id}`}>
              <img src={candy.imgUrl} />
            </Link>
            {/* {This link tag renders a single candy component when we click on
            the image for the url} */}
          </div>
        ))}
      </div>
    );
  }
}

const mapState = state => ({
  candies: state.candies,
  loading: state.loading,
});

const mapDispatch = dispatch => ({
  getCandies: () => dispatch(getAllCandiesThunk()),
});

export default connect(
  mapState,
  mapDispatch
)(AllCandies);
