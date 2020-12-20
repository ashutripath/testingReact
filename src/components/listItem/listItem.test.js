import React from 'react'
import { shallow } from 'enzyme'
import { checkProps, findByTestAttr } from "../../../utils"
import ListItem from "./index"


describe("ListItem Component", () => {

	describe("Checking propTypes", () => {

		it('Should not throw a warning', () => {

			const expectedProps = {
				title: 'Example Title',
				desc: "Example Desc"
			}
			const propsErr = checkProps(ListItem, expectedProps)
			expect(propsErr).toBeUndefined()
		})
	})

	describe("Component Renders", () => {

		let wrapper
		beforeEach(() => {
			const props = {
				title: 'Example Title',
				desc: "Example Desc"
			}
			wrapper = shallow(<ListItem {...props} />)
		})

		it("Should render without error", () => {
			const component = findByTestAttr(wrapper, "listItemComponent")
			expect(component.length).toBe(1)
		})

		it("Should render title", () => {
			const component = findByTestAttr(wrapper, "componentTitle")
			expect(component.length).toBe(1)
		})

		it("Should render desc", () => {
			const component = findByTestAttr(wrapper, "componentDesc")
			expect(component.length).toBe(1)
		})

	})


	describe("Should not render", () => {

		let wrapper
		beforeEach(() => {
			const props = {
				desc: "Example Desc"
			}
			wrapper = shallow(<ListItem {...props} />)
		})

		it("Should not reneder component", () => {
			const component = findByTestAttr(wrapper, "listItemComponent")
			expect(component.length).toBe(0)
		})
	})
	
})