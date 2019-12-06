import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import PlayerCard from './components/PlayerCard';
import NavbarDarkM from './components/NavbarDarkM'
import {render} from '@testing-library/react';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('navbar darkmode', () => {
  const nav = render(<NavbarDarkM />)
  console.log(nav);
})

test('player card ', () => {
  const card = render(<PlayerCard />)
  console.log(card);
})

test('contains womans', () => {
  const { getByText } = render(<App />);
  getByText(/womans/i);
});


test('contains world', () => {
  const { getByText } = render(<App />);
  getByText(/world/i);
});

test('contains cup', () => {
  const { getByText } = render(<App />);
  getByText(/cup/i);
});

test('contains darkmode', () => {
  const { getByText } = render(<App />);
  getByText(/darkmode/i);
});
// test('contains name', () => {
//   const { getByText } = render(<App />);
//   getByText(/name/i);
// });

// test('contains  country', () => {
//   const { getByText } = render(<App />);
//   getByText(/country/i);
// });

// test('contains times searched', () => {
//   const { getByText } = render(<App />);
//   getByText(/times searched/i);
// });