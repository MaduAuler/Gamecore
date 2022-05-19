import { GET_COMMUNITIES} from '../actions'
import { initialState } from '../store'

const communitiesReducer = (state = initialState.communities, action) => {
  switch (action.type) {
 
    case GET_COMMUNITIES:
        return {
          ...state,
          stock: action.payload,
        }
  

    default:
      return state
  }
}

export default communitiesReducer