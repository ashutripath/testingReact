import { types } from "../../actions/types"
import postsReducer from "./reducer"

describe('Posts reducer', () => {

	it('Should return default state', () => {
		const newState = postsReducer(undefined, {})
		expect(newState).toEqual([])
	})

	it('Should return state when receving type', () => {

		const posts = [{title: 'test1'}, {title: 'test2'}, {title: 'test3'}]
		const newState = postsReducer(undefined, {
			type: types.GET_POSTS,
			payload: posts
		})
		expect(newState).toEqual(posts)
		
	})
})