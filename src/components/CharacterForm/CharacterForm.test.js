import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import toJson, { shallow } from 'enzyme-to-json';

import CharacterForm from './CharacterForm';

// mock props
const character = {
  id: 1,
  user: {
    user_name: 'larry',
    id: 1
  }
};

describe('CharacterForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <CharacterForm character={character} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip('renders the UI as expected', () => {
    const tree = renderer
      .create(<CharacterForm character={character} />)
      .toJson();
    expect(tree).toMatchSnapshot();
  });

  it.skip('renders a CharacterForm by default', () => {
    const wrapper = shallow(<CharacterForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
