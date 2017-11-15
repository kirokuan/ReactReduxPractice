//import raf from '../setup'

import React from 'react';

import {App} from '../app/app.jsx';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

it('renders correctly', () => {
  const dom = shallow(
    <App />
  );
  expect(dom).toMatchSnapshot();
});