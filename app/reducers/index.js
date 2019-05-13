import Axios from 'axios';

// need 3 things: action type, action creators, & thunk creators!!

// ACTION TYPES:
const GET_ALL_CANDIES = 'GET_ALL_CANDIES';
const GET_SINGLE_CANDY = 'GET_SINGLE_CANDY';

// ACTION CREATORS:
const getAllCandies = candies => ({
  type: GET_ALL_CANDIES,
  candies,
});

const getSingleCandy = candy => ({
  type: GET_SINGLE_CANDY,
  candy,
});

// THUNK CREATORS
export const getAllCandiesThunk = () => {
  return async dispatch => {
    let { data } = await Axios.get('/api/candies');
    dispatch(getAllCandies(data)); // data is just the candies
  };
};

export const getSingleCandyThunk = id => {
  return async dispatch => {
    let { data } = await Axios.get(`/api/candies/${id}`);
    dispatch(getSingleCandy(data)); // data is just the candies
  };
};

const initialState = {
  candies: [],
  singleCandy: {},
  laoding: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CANDIES:
      return { ...state, candies: action.candies, laoding: false };
    case GET_SINGLE_CANDY:
      return { ...state, singleCandy: action.candy, laoding: false };
    default:
      return state;
  }
};

export default rootReducer;
