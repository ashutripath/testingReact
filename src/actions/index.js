 import axios from 'axios'
 import { types } from "./types"


 export const fetchPosts = () => async (dispatch, getState) => {
	 try {
		 const resp = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
		 dispatch({
			 type: types.GET_POSTS,
			 payload: resp.data
		 })
	 } catch(e) {
		 console.log("error while getting posts", e)
	 }
 }
