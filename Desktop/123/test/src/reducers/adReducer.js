export default function reducer(state = {
  fetching: false,
  fetched: false,
  data: {
    adType: ['test'],
    adName: {
      test: ['test1'],
    }
  },
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_AD_PENDING':
      {
        return {
          ...state,
          fetching: true,
        }
      }
    case 'FETCH_AD_REJECTED':
      {
        return {
          ...state,
          fetching: false,
          error: action.payload,
        }
      }
    case 'FETCH_AD_FULFILLED':
      {
        return {
          ...state,
          fetching: false,
          fetched: true,
          data: action.payload.data.data,
        }
      }
    default:
      return {
        ...state,
      }
  }
}
