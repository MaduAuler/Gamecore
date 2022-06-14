import { GET_MYPROFILE} from '../actions'
import { initialState } from '../store'

const myProfileReducer = (state = initialState.myProfile, action) => {
  switch (action.type) {
 
    case GET_MYPROFILE:
        return {
          ...state,
          stock: action.payload,
        }
  

    default:
      return state
  }
}

export default myProfileReducer