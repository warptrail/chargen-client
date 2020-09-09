import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import toJson, { shallow } from 'enzyme-to-json';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip('renders the UI as expected', () => {
    const tree = renderer.create(<NotFoundPage />).toJson();
    expect(tree).toMatchSnapshot();
  });

  it.skip('renders a NotFoundPage by default', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
