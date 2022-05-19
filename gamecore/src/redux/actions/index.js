
export const GET_COMMUNITIES = 'GET_COMMUNITIES'



export const getCommunitiesAction = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        "http://localhost:3001/community"
      )
      if (resp.ok) {
        let communities = await resp.json()

        dispatch({
          type: GET_COMMUNITIES,
          payload: communities,
        })

      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error) 
    }
  }
}