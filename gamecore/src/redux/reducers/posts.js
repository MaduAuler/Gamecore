import { GET_POSTS} from '../actions'
import { initialState } from '../store'

const postsReducer = (state = initialState.posts, action) => {
  switch (action.type) {
 
    case GET_POSTS:
        return {
          ...state,
          stock: action.payload,
        }
  

    default:
      return state
  }
}

export default postsReducer