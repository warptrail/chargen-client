import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import toJson, { shallow } from 'enzyme-to-json';

import CreatePage from './CreatePage';

describe('CreatePage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <CreatePage />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip('renders the UI as expected', () => {
    const tree = renderer.create(<CreatePage />).toJson();
    expect(tree).toMatchSnapshot();
  });

  it.skip('renders a CreatePage by default', () => {
    const wrapper = shallow(<CreatePage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
