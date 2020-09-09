import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddItemForm from './AddItemForm';

describe(`AddItemForm component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <AddItemForm />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip('renders a form.AddItemForm by default', () => {
    const wrapper = shallow(<AddItemForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it.skip('renders the NotefulForm given props', () => {
    const wrapper = shallow(<AddItemForm {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
