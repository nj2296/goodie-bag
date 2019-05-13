import React, { connect } from 'react';
import { getSingleCandyThunk } from '../reducers';

class SingleCandy extends React.Component {
  componentDidMount() {
    this.props.getCandy(this.props.match.params.id);
  }

  render() {
    let candy = this.props.candy; // candy variable comes from mapState where we declared candy & set it to state.candy. The state in this.props.state is coming from the exported rootReducer!!
    return (
      <div>
        <h1>{candy.name}</h1>
        <img src={candy.imgUrl} />
      </div>
    );
  }
}

const mapState = state => ({
  candy: state.candy,
});

const mapDispatch = dispatch => ({
  getCandy: () => dispatch(getSingleCandyThunk()),
});

export default connect(
  mapState,
  mapDispatch
)(SingleCandy);

// In this SingleCandy component, we are only using state from redux (reducer) so we pass them down as props (for class component it will be this.state.props).
// We can also use local state and have local state props/variables. In this case, we'd have to add the constructor method with this.state defined on it. Then we could use this.state.etc to access local state variables. Then we'd have to send these local state props (like name) onto the <Route /> for SingleCandy like so:
{
  /* <Route exact path="/candies/:id" component={SingleCandy} name={}/> */
}
