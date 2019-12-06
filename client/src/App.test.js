import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import PlayerCard from './components/PlayerCard';
import NavbarDarkM from './components/NavbarDarkM'
import {render} from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('navbar darkmode', () => {
  const nav = render(<NavbarDarkM />)
  console.log(nav);
})

test('player card ', () => {
  const card = render(<PlayerCard />)
  console.log(card);
})


