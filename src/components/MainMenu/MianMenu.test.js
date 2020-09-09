import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import toJson, { shallow } from 'enzyme-to-json';

import MainMenu from './MainMenu';

// mock props
const character = {
  id: 1,
  user: {
    user_name: 'larry',
    id: 1
  }
};

describe('MainMenu component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <MainMenu character={character} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip('renders the UI as expected', () => {
    const tree = renderer.create(<MainMenu character={character} />).toJson();
    expect(tree).toMatchSnapshot();
  });

  it.skip('renders a MainMenu by default', () => {
    const wrapper = shallow(<MainMenu />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
