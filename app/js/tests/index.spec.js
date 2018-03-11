import React from 'react';

import { shallow } from 'enzyme';
import sinon from 'sinon';

import Title from '../components/Title';
import Button from '../components/Button';

test('Renders a Title', () => {
	const wrapper = shallow(<Title headline={'I am a Title'} />);
	expect(wrapper).toMatchSnapshot();
});

test('Renders a Title with prop title', () => {
	const wrapper = shallow(<Title headline={'Example'} />);
	expect(wrapper.prop('headline')).toEqual('Example');
});

test('Simulate Button clicked', () => {
	const wrapper = shallow(<Button label={'Click me'} />);
	expect(wrapper).toMatchSnapshot();
	wrapper.find('.btn').simulate('click');
	expect(wrapper).toMatchSnapshot();
});

describe('<MyComponent />', () => {
	it('simulates click events', () => {
		const onButtonClick = sinon.spy();
		const wrapper = shallow(<Button />);
		wrapper.find('.btn').simulate('click');
		expect(onButtonClick.calledOnce).to.equal(true);
	});
});
