export default function reducer(state = {
  fetching: false,
  fetched: false,
  user: {
    id: null,
    name: null,
    age: null,
  },
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_USER_PENDING':
      {
        //state.name =action.payload;
        return {
          ...state,
          fetching: true,
        }
      }
    case 'FETCH_USER_REJECTED':

      {
        //state.name =action.payload;
        return {
          ...state,
          fetching: false,
          error: action.payload,
        }
      }
    case 'FETCH_USER_FULFILLED':
      {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.payload,
        }
      }
    default:
      return {
        ...state,
      }
  }
}
