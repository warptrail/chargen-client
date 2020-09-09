import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import toJson, { shallow } from 'enzyme-to-json';

import SingleCharacterPage from './SingleCharacterPage';

describe('SingleCharacterPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <SingleCharacterPage />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip('renders the UI as expected', () => {
    const tree = renderer.create(<SingleCharacterPage />).toJson();
    expect(tree).toMatchSnapshot();
  });

  it.skip('renders a SingleCharacterPage by default', () => {
    const wrapper = shallow(<SingleCharacterPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
