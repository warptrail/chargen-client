import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import toJson, { shallow } from 'enzyme-to-json';

import RegistrationForm from './RegistrationForm';

describe('RegistrationForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <RegistrationForm />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip('renders the UI as expected', () => {
    const tree = renderer.create(<RegistrationForm />).toJson();
    expect(tree).toMatchSnapshot();
  });

  it.skip('renders a RegistrationForm by default', () => {
    const wrapper = shallow(<RegistrationForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
