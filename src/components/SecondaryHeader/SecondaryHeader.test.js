import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import toJson, { shallow } from 'enzyme-to-json';

import SecondaryHeader from './SecondaryHeader';

describe('SecondaryHeader component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <SecondaryHeader />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip('renders the UI as expected', () => {
    const tree = renderer.create(<SecondaryHeader />).toJson();
    expect(tree).toMatchSnapshot();
  });

  it.skip('renders a SecondaryHeader by default', () => {
    const wrapper = shallow(<SecondaryHeader />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
