import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import toJson, { shallow } from 'enzyme-to-json';

import RegistrationPage from './RegistrationPage';

describe('RegistrationPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <RegistrationPage />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip('renders the UI as expected', () => {
    const tree = renderer.create(<RegistrationPage />).toJson();
    expect(tree).toMatchSnapshot();
  });

  it.skip('renders a RegistrationPage by default', () => {
    const wrapper = shallow(<RegistrationPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
