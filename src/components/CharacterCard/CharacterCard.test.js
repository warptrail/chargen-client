import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import toJson, { shallow } from 'enzyme-to-json';

import CharacterCard from './CharacterCard';

// mock props
const character = {
  id: 1,
  user: {
    user_name: 'larry',
    id: 1
  }
};

describe('CharacterCard component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <CharacterCard character={character} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip('renders the UI as expected', () => {
    const tree = renderer
      .create(<CharacterCard character={character} />)
      .toJson();
    expect(tree).toMatchSnapshot();
  });

  it.skip('renders a CharacterCard by default', () => {
    const wrapper = shallow(<CharacterCard />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
