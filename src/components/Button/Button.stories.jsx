import React, { useEffect, useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import Button from 'src/components/Button';

const sizes = ['sm', 'md'];
const colors = ['Primary', 'Secondary', 'Tertiary'];

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('Button', () =>
  React.createElement(() => {
    const btnRef = useRef();

    useEffect(() => {
      if (boolean('tabbed', false) && btnRef.current) {
        btnRef.current.focus();
      }
    }, [boolean('tabbed', false)]);

    return (
      <Button
        ref={btnRef}
        label={text('label', 'Default Text')}
        size={select('size', sizes, 'sm')}
        variant={select(
          'variant',
          colors.map(color => color.toLowerCase()),
          'primary'
        )}
        disabled={boolean('disabled', false)}
        onClick={action('clicked')}
      />
    );
  })
);
