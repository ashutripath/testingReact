import moxios from 'moxios'
import { testStore } from "../../utils"
import { fetchPosts } from "../actions"

describe("Fetch Posts", () => {

	beforeEach(() => {
		moxios.install()
	})

	afterEach(() => {
		moxios.uninstall()
	})

	test("Store is updated correctly", async () => {

		const expectedState = [{
			title: 'Example title',
			body: 'Example body'
		},{
			title: 'Example title',
			body: 'Example body'
		},{
			title: 'Example title',
			body: 'Example body'
		}]
		const store = testStore()

		moxios.wait(() => {
			const request = moxios.requests.mostRecent()
			request.respondWith({
				status: 200,
				response: expectedState
			})
		})

		await store.dispatch(fetchPosts())
		const newState = store.getState()
		expect(newState.posts).toBe(expectedState)
		
	})
}) 
