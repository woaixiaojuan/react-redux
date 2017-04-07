export default function reducer(state = {
  fetching: false,
  fetched: false,
  posts: [],
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_POSTS_PENDING':
      {
        return {
          ...state,
          fetching: true,
        }
      }
    case 'FETCH_POSTS_REJECTED':
      {
        return { ...state,
          fetching: false,
          error: action.payload,
        }
      }
    case 'FETCH_POSTS_FULFILLED':
      {
        return {
          ...state,
          fetching: false,
          fetched: true,
          posts: action.payload,
        }
      }
    default:
      return {
        ...state,
      }
  }
}
