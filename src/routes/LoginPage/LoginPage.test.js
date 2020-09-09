import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import toJson, { shallow } from 'enzyme-to-json';

import LoginPage from './LoginPage';

describe('LoginPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip('renders the UI as expected', () => {
    const tree = renderer.create(<LoginPage />).toJson();
    expect(tree).toMatchSnapshot();
  });

  it.skip('renders a LoginPage by default', () => {
    const wrapper = shallow(<LoginPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
