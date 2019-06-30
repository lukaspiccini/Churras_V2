import React from 'react';
import Colors from './styles/settings/colors';
import Spacing from './styles/settings/spacing';
import Size from './styles/settings/size';
import Reset from './styles/settings/reset';
import Home from './pages/Home/index';

const App = () => (
  <>
    <Colors />
    <Spacing />
    <Size />
    <Reset />

    <Home />
  </>
)

export default App;
