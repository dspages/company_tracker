import React from 'react';
import FinanceForm from '../components/finance/finance_form.jsx';
import renderer from 'react-test-renderer';


test('Component correctly renders', () => {
  const component = renderer.create(<FinanceForm
    />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
