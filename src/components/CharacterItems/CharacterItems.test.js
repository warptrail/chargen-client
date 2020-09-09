import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import toJson, { shallow } from 'enzyme-to-json';

import CharacterItems from './CharacterItems';

// mock props
const items = [{ id: 1, item_name: 'test_item', user: { user_name: 'larry' } }];

describe('CharacterItems component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <CharacterItems items={items} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip('renders the UI as expected', () => {
    const tree = renderer.create(<CharacterItems items={items} />).toJson();
    expect(tree).toMatchSnapshot();
  });

  it.skip('renders a CharacterItems by default', () => {
    const wrapper = shallow(<CharacterItems />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
