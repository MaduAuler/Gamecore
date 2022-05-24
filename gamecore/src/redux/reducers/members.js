import { GET_MEMBERS} from '../actions'
import { initialState } from '../store'

const membersReducer = (state = initialState.members, action) => {
  switch (action.type) {
 
    case GET_MEMBERS:
        return {
          ...state,
          stock: action.payload,
        }
  

    default:
      return state
  }
}

export default membersReducer