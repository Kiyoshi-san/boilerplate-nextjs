import React from 'react';
import GlobalStyles from '../app/styles/global.styles'
import { Preview } from '@storybook/react';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <GlobalStyles />
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  }
};

export default preview;
