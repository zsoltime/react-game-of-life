import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Game from 'Game';
import 'styles';

const renderComponent = (Component) => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};

renderComponent(Game);

if (module.hot) {
  module.hot.accept(Game, () => { renderComponent(Game); });
}
