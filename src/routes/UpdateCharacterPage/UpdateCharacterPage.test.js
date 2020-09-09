import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import toJson, { shallow } from 'enzyme-to-json';

import UpdateCharacterPage from './UpdateCharacterPage';

describe('UpdateCharacterPage component', () => {
  const match = {
    params: {
      characterId: '2'
    }
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <UpdateCharacterPage match={match} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip('renders the UI as expected', () => {
    const tree = renderer.create(<UpdateCharacterPage />).toJson();
    expect(tree).toMatchSnapshot();
  });

  it.skip('renders a UpdateCharacterPage by default', () => {
    const wrapper = shallow(<UpdateCharacterPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
