
export const GET_COMMUNITIES = 'GET_COMMUNITIES'
export const GET_MEMBERS = 'GET_MEMBERS'
export const GET_MYPROFILE = 'GET_MYPROFILE'
export const GET_POSTS = 'GET_POSTS'


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

export const getMembersAction = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        "http://localhost:3001/members"
      )
      if (resp.ok) {
        let members = await resp.json()

        dispatch({
          type: GET_MEMBERS,
          payload: members,
        })

      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error) 
    }
  }
}
export const getMyProfileAction = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        "http://localhost:3001/myProfile"
      )
      if (resp.ok) {
        let myProfile = await resp.json()

        dispatch({
          type: GET_MYPROFILE,
          payload: myProfile,
        })

      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error) 
    }
  }
}

export const getPosts = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        "http://localhost:3001/posts"
      )
      if (resp.ok) {
        let posts = await resp.json()

        dispatch({
          type: GET_POSTS,
          payload: posts,
        })

      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error) 
    }
  }
}