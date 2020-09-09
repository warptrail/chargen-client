import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import toJson, { shallow } from 'enzyme-to-json';

import RosterPage from './RosterPage';

describe('RosterPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <RosterPage />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip('renders the UI as expected', () => {
    const tree = renderer.create(<RosterPage />).toJson();
    expect(tree).toMatchSnapshot();
  });

  it.skip('renders a RosterPage by default', () => {
    const wrapper = shallow(<RosterPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
