


import React from 'react';
import FirmForm from '../components/firm_index/firm_form.jsx';
import renderer from 'react-test-renderer';


test('Component correctly renders', () => {
  const component = renderer.create(<FirmForm
    />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
