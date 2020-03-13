import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Grids from 'src/components/Grids';
const stories = storiesOf('Grids', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('Grids', () =>
  React.createElement(() => {
    return (
      <Grids/>
    );
  })
);
