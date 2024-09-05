import type { Preview } from "@storybook/react";
import '../styles/global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
// .storybook/preview.ts

export const parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export default preview;
