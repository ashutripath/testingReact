import React from 'react'
import { shallow } from "enzyme"

import { findByTestAttr, checkProps } from "../../../utils"
import Headline from "./index"


const setUp = (props={}) => {
	const component = shallow(<Headline {...props} />)
	return component
}
 

describe('Headline Component', () => {

	describe('Checking PropTypes', () => {

		it('Should not throw an warning', () => {

			const expectedProps = {
				header: 'Test Header',
				desc: 'Test desc',
				tempArr: [{
					fName: 'Test Name',
    				lName: 'Test lName',
    				email: 'test@gmail.com',
    				age: 23,
    				onlineStatus: true
				}]
			}
			const propsErr = checkProps(Headline, expectedProps)
			expect(propsErr).toBeUndefined()

		})
		
	})
	
	describe('Have props', () => {

		let wrapper
		beforeEach(() => {
			const props = {
				header: 'Test Header',
				desc: 'Test Desc'
			}
			wrapper = setUp(props)
		})

		it('Should render without error', () => {
			const component = findByTestAttr(wrapper, 'HeadlineComponent')
			expect(component.length).toBe(1)
		})

		it('Should render H1', () => {
			const component = findByTestAttr(wrapper, 'header')
			expect(component.length).toBe(1)
		})

		it('Should render desc', () => {
			const component = findByTestAttr(wrapper, 'desc')
			expect(component.length).toBe(1)
		})
	})

	describe('Have No props', () => {
		
		let wrapper
		beforeEach(() => {
			wrapper = setUp()
		})

		it('Should not render', () => {
			const component = findByTestAttr(wrapper, 'HeadlineComponent')
			expect(component.length).toBe(0)
		})
	})

})